package com.cactusvilleage.server.auth.service;

import com.cactusvilleage.server.auth.entities.Member;
import com.cactusvilleage.server.auth.repository.MemberRepository;
import com.cactusvilleage.server.global.exception.BusinessLogicException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

import static com.cactusvilleage.server.global.exception.ExceptionCode.MEMBER_NOT_MATCH;

@Service
@RequiredArgsConstructor
public class CustomUserDetailService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return memberRepository.findByEmail(username)
                .map(this::createUserDetails)
                .orElseThrow(() -> new BusinessLogicException(MEMBER_NOT_MATCH));
    }

    private UserDetails createUserDetails(Member member) {
        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(member.getAuthority().toString());
        return new User(String.valueOf(member.getId()), member.getPassword(), Collections.singleton(grantedAuthority));
    }
}
