package com.cactusvilleage.server.auth.service;

import com.cactusvilleage.server.auth.email.AwsSesUtils;
import com.cactusvilleage.server.auth.entities.Member;
import com.cactusvilleage.server.auth.entities.RefreshToken;
import com.cactusvilleage.server.auth.entities.oauth.ProviderType;
import com.cactusvilleage.server.auth.repository.MemberRepository;
import com.cactusvilleage.server.auth.repository.RefreshTokenRepository;
import com.cactusvilleage.server.auth.util.CookieUtil;
import com.cactusvilleage.server.auth.util.HeaderUtil;
import com.cactusvilleage.server.auth.util.SecurityUtil;
import com.cactusvilleage.server.auth.util.TokenProvider;
import com.cactusvilleage.server.auth.web.dto.request.EditDto;
import com.cactusvilleage.server.auth.web.dto.request.PlainLoginDto;
import com.cactusvilleage.server.auth.web.dto.request.PlainSignupDto;
import com.cactusvilleage.server.auth.web.dto.request.RecoveryDto;
import com.cactusvilleage.server.auth.web.dto.response.EditResponseDto;
import com.cactusvilleage.server.auth.web.dto.response.MemberInfoResponse;
import com.cactusvilleage.server.global.exception.BusinessLogicException;
import com.cactusvilleage.server.global.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Optional;
import java.util.UUID;

import static com.cactusvilleage.server.auth.web.dto.response.MemberInfoResponse.Status.*;
import static com.cactusvilleage.server.global.exception.ExceptionCode.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberService {

    private final MemberRepository memberRepository;
    private final RefreshTokenRepository tokenRepository;
    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authBuilder;
    private final PasswordEncoder passwordEncoder;
    private final AwsSesUtils awsSesUtils;
    private final HeaderUtil headerUtil;

    public void signup(PlainSignupDto signupDto) {
        Member member = signupDto.toMember(passwordEncoder);
        memberRepository.save(member);
    }

    public ResponseEntity login(PlainLoginDto loginDto, HttpServletRequest request, HttpServletResponse response) {
        Authentication authentication = verifyPassword(loginDto.getEmail(), loginDto.getPassword());

        Long memberId = Long.parseLong(authentication.getName());
        Member member = findMember(memberId);

        MemberInfoResponse memberInfo = getMemberInfo(member);
        headerUtil.generateTokens(request, response, authentication);

        return new ResponseEntity<>(new SingleResponseDto<>(memberInfo), HttpStatus.OK);
    }

    public void logout(HttpServletRequest request, HttpServletResponse response) {
        RefreshToken refreshToken = getRefreshToken(request);

        tokenRepository.deleteById(refreshToken.getTokenId());
        response.setHeader("Authorization", null);
        CookieUtil.deleteCookie(request, response, "refresh_token");
    }

    public ResponseEntity edit(EditDto editDto) {
        Long memberId = SecurityUtil.getCurrentMemberId();
        Member foundMember = findMember(memberId);

        if (foundMember.getProviderType().equals(ProviderType.CACTUS)) {
            if (editDto.getPrePassword() == null) {
                throw new BusinessLogicException(PRE_PASSWORD_REQUIRED);
            }
            verifyPassword(foundMember.getEmail(), editDto.getPrePassword());

            Optional.ofNullable(editDto.getUsername())
                    .ifPresent(foundMember::setUsername);
            Optional.ofNullable(editDto.getNewPassword())
                    .ifPresent(password -> foundMember.setPassword(passwordEncoder.encode(password)));

            memberRepository.save(foundMember);
            EditResponseDto editResponse = EditResponseDto.builder().username(foundMember.getUsername()).build();

            return new ResponseEntity<>(new SingleResponseDto<>(editResponse), HttpStatus.OK);

        } else {
            foundMember.setUsername(editDto.getUsername());
            memberRepository.save(foundMember);
            EditResponseDto editResponse = EditResponseDto.builder().username(foundMember.getUsername()).build();

            return new ResponseEntity(new SingleResponseDto<>(editResponse), HttpStatus.OK);
        }
    }

    public void recovery(RecoveryDto recoveryDto) {
        Member foundMember;
        try {
            foundMember = memberRepository.findByEmail(recoveryDto.getEmail()).orElseThrow();
            if (!foundMember.getUsername().equals(recoveryDto.getUsername())) {
                throw new Exception();
            }
        } catch (Exception e) {
            throw new BusinessLogicException(MEMBER_NOT_FOUND);
        }

        String email = recoveryDto.getEmail();
        String tempPassword = getTempPassword();

        foundMember.setPassword(passwordEncoder.encode(tempPassword));
        memberRepository.save(foundMember);

        Context context = new Context();
        context.setVariable("username", recoveryDto.getUsername());
        context.setVariable("tempPassword", tempPassword);

        awsSesUtils.singleEmailRequest(email, "선인장 키우기의 임시 비밀번호입니다", "recovery", context);
    }

    public void delete(HttpServletRequest request, HttpServletResponse response) {
        RefreshToken refreshToken = getRefreshToken(request);
        Long memberId = Long.parseLong(refreshToken.getMemberId());

        Member foundMember = findMember(memberId);
        foundMember.setDeleted(true);
        String dummy = getEncodedMemberId(memberId);
        foundMember.deleteMember(foundMember.getEmail() + dummy, foundMember.getUsername() + dummy);
        memberRepository.save(foundMember);

        response.setHeader("Authorization", null);
        CookieUtil.deleteCookie(request, response, "refresh_token");
    }

    public ResponseEntity reissue(HttpServletRequest request) {
        RefreshToken refreshToken = getRefreshToken(request);
        Authentication authentication = tokenProvider.getAuthentication(refreshToken.getTokenValue());
        String accessToken = tokenProvider.generateAccessToken(authentication);

        return ResponseEntity.ok()
                .header("Authorization", "Bearer " + accessToken)
                .build();
    }

    public ResponseEntity memberInfo() {
        Long memberId = SecurityUtil.getCurrentMemberId();
        Member member = findMember(memberId);
        MemberInfoResponse memberInfo = getMemberInfo(member);
        return new ResponseEntity<>(new SingleResponseDto<>(memberInfo), HttpStatus.OK);
    }

    private MemberInfoResponse getMemberInfo(Member member) {
        //member.getChallenges().getActive() == true

        //challengeType = 챌.getType

        //progress = 챌.getHistories() / 챌.getTargetDate

        return MemberInfoResponse.builder()
                .email(member.getEmail())
                .username(member.getUsername())
                .status(NONE)
                .progress(-1)
                .challengeType(null)
                .now(0)
                .targetDate(0)
                .providerType(member.getProviderType().toString())
                .build();
    }


    private RefreshToken getRefreshToken(HttpServletRequest request) {
        Cookie refreshCookie = CookieUtil.getCookie(request, "refresh_token").orElseThrow(() -> new BusinessLogicException(NO_AUTHENTICATION));
        String tokenId = refreshCookie.getValue();

        return tokenRepository.findById(tokenId).orElseThrow(() -> new BusinessLogicException(NO_AUTHENTICATION));
    }

    private String getTempPassword() {
        String tempPassword = UUID.randomUUID().toString().replaceAll("-", "");
        return tempPassword.substring(0, 10);
    }

    private Authentication verifyPassword(String email, String password) {
        UsernamePasswordAuthenticationToken authenticationToken = toAuthentication(email, password);
        try {
            return authBuilder.getObject().authenticate(authenticationToken);
        } catch (AuthenticationException e) {
            throw new BusinessLogicException(MEMBER_NOT_FOUND);
        }
    }

    public UsernamePasswordAuthenticationToken toAuthentication(String email, String password) {
        return new UsernamePasswordAuthenticationToken(email, password);
    }

    public Member findMember(Long memberId) {
        return memberRepository.findById(memberId).orElseThrow(() -> new BusinessLogicException(MEMBER_NOT_FOUND));
    }

    private String getEncodedMemberId(Long memberId) {
        return passwordEncoder.encode(memberId.toString());
    }


}
