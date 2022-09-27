package com.cactusvilleage.server.auth.service;

import com.cactusvilleage.server.auth.entities.Authority;
import com.cactusvilleage.server.auth.entities.Member;
import com.cactusvilleage.server.auth.entities.oauth.OAuth2UserInfo;
import com.cactusvilleage.server.auth.entities.oauth.OAuth2UserInfoFactory;
import com.cactusvilleage.server.auth.entities.oauth.ProviderType;
import com.cactusvilleage.server.auth.entities.oauth.UserPrincipal;
import com.cactusvilleage.server.auth.repository.MemberRepository;
import com.cactusvilleage.server.global.exception.BusinessLogicException;
import com.nimbusds.oauth2.sdk.util.StringUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;


import static com.cactusvilleage.server.global.exception.ExceptionCode.MEMBER_INFO_EXISTS;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {
    private final MemberRepository memberRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        return this.process(userRequest, oAuth2User);
    }

    private OAuth2User process(OAuth2UserRequest userRequest, OAuth2User oAuth2User) {
        ProviderType providerType = ProviderType.valueOf(userRequest.getClientRegistration().getRegistrationId().toUpperCase());
        OAuth2UserInfo oAuth2UserInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(providerType, oAuth2User.getAttributes());
        String providerId = oAuth2UserInfo.getId();

        //중복 이메일
        if (oAuth2UserInfo.getEmail() != null && memberRepository.existsByEmail(oAuth2UserInfo.getEmail())) {
            Member member = memberRepository.findByEmail(oAuth2UserInfo.getEmail()).get();
            ProviderType existingType = member.getProviderType();
            //providerType 다르게 가입하는 경우
            if (providerType != existingType) {
                MEMBER_INFO_EXISTS.setMessage("이미 " + existingType + "(으)로 가입한 정보가 있습니다. 로그인해주세요!");
                throw new BusinessLogicException(MEMBER_INFO_EXISTS);
            }
            //로그인 처리
            return UserPrincipal.create(member, oAuth2User.getAttributes());
            //재가입
        } else if (memberRepository.existsByProviderId(providerId) && memberRepository.findByProviderId(providerId).isDeleted()) {
            Member member = createMember(oAuth2UserInfo, providerType);
            return UserPrincipal.create(member, oAuth2User.getAttributes());
            //업뎃
        } else if (memberRepository.existsByProviderId(providerId) && !memberRepository.findByProviderId(providerId).isDeleted()) {
            Member member = memberRepository.findByProviderId(oAuth2UserInfo.getId());
            member = updateMember(member, oAuth2UserInfo);
            return UserPrincipal.create(member, oAuth2User.getAttributes());
            //최초 가입
        } else {
            Member member = createMember(oAuth2UserInfo, providerType);
            return UserPrincipal.create(member, oAuth2User.getAttributes());
        }
    }

    private void checkUsername(OAuth2UserInfo oAuth2UserInfo, Member member) {
        String username;
        if (oAuth2UserInfo.getName().length() > 8) {
            username = oAuth2UserInfo.getName().substring(0, 8);
        } else {
            username = oAuth2UserInfo.getName();
        }

        if (memberRepository.existsByUsername(username)) {
            long count = memberRepository.findAll().stream()
                    .filter(foundMember -> foundMember.getUsername().startsWith(username) && StringUtils.isNumeric(foundMember.getUsername().substring(username.length())))
                    .count();
            member.setUsername(username + (count + 1));
            if (memberRepository.existsByUsername(member.getUsername())) {
                while (!memberRepository.existsByUsername(member.getUsername())) {
                    int suffix = Integer.parseInt(member.getUsername().substring(username.length())) + 1;
                    member.setUsername(username + suffix);
                }
            }
        } else {
            member.setUsername(username);
        }
    }

    private Member updateMember(Member member, OAuth2UserInfo oAuth2UserInfo) {
        if (oAuth2UserInfo.getEmail() != null && !memberRepository.existsByEmail(oAuth2UserInfo.getEmail())) {
            member.setEmail(oAuth2UserInfo.getEmail());
        }
        return memberRepository.saveAndFlush(member);
    }

    private Member createMember(OAuth2UserInfo userInfo, ProviderType providerType) {
        Member member = Member.builder()
                .providerId(userInfo.getId())
                .email(userInfo.getEmail())
                .authority(Authority.ROLE_USER)
                .providerType(providerType)
                .build();

        checkUsername(userInfo, member);

        return memberRepository.saveAndFlush(member);
    }
}
