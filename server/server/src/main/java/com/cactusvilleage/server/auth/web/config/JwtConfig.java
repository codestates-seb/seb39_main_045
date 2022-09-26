package com.cactusvilleage.server.auth.web.config;

import com.cactusvilleage.server.auth.util.TokenProvider;
import com.cactusvilleage.server.auth.web.filter.JwtFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@RequiredArgsConstructor
public class JwtConfig extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {
    private final TokenProvider tokenProvider;
//    private final JwtExceptionHandlerFilter jwtExceptionHandlerFilter;

    @Override
    public void configure(HttpSecurity http) {
        JwtFilter jwtFilter = new JwtFilter(tokenProvider);
        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
//        http.addFilterAfter(jwtExceptionHandlerFilter, JwtFilter.class);
    }
}
