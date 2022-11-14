package com.cactusvilleage.server.auth.web.config;

import com.cactusvilleage.server.auth.repository.OAuth2AuthorizationRequestRepository;
import com.cactusvilleage.server.auth.repository.RefreshTokenRepository;
import com.cactusvilleage.server.auth.service.CustomOAuth2UserService;
import com.cactusvilleage.server.auth.util.CookieUtil;
import com.cactusvilleage.server.auth.util.TokenProvider;
import com.cactusvilleage.server.auth.util.impl.JwtCookieUtil;
import com.cactusvilleage.server.auth.web.filter.ExceptionHandlerFilter;
import com.cactusvilleage.server.auth.web.oauth.AppProperties;
import com.cactusvilleage.server.auth.web.oauth.OAuth2AuthenticationFailureHandler;
import com.cactusvilleage.server.auth.web.oauth.OAuth2AuthenticationSuccessHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.filter.CorsFilter;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final CorsFilter corsFilter;
    private final TokenProvider tokenProvider;
    private final CustomOAuth2UserService oAuth2UserService;
    private final AppProperties appProperties;
    private final RefreshTokenRepository tokenRepository;


    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public CookieUtil cookieUtil() {
        return new JwtCookieUtil(tokenProvider, passwordEncoder(), tokenRepository);
    }

    @Bean
    public OAuth2AuthorizationRequestRepository oAuth2AuthorizationRequestRepository() {
        return new OAuth2AuthorizationRequestRepository(cookieUtil());
    }

    @Bean
    public OAuth2AuthenticationSuccessHandler successHandler() {
        return new OAuth2AuthenticationSuccessHandler(appProperties, cookieUtil(), oAuth2AuthorizationRequestRepository(), tokenRepository);
    }

    @Bean OAuth2AuthenticationFailureHandler failureHandler() {
        return new OAuth2AuthenticationFailureHandler(cookieUtil(), oAuth2AuthorizationRequestRepository());
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .httpBasic().disable()
                .csrf().disable()
                .formLogin().disable()
                .sessionManagement().sessionCreationPolicy(STATELESS)

                .and()
                .authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS).permitAll()
                .antMatchers("/api/*/members/signup", "/api/*/members/login/**", "/api/*/members/recovery").permitAll()
                .antMatchers("/api/*/members/reissue", "/api/*/members/logout").permitAll()
                .antMatchers(HttpMethod.DELETE, "/api/*/members").permitAll()
                .antMatchers("/*/oauth2/**").permitAll()
                .anyRequest().authenticated()

                .and()
                .addFilterBefore(new ExceptionHandlerFilter(), CorsFilter.class)
                .addFilter(corsFilter)
                .apply(new JwtConfig(tokenProvider, cookieUtil()))

                .and()
                .oauth2Login()
                .authorizationEndpoint()
                .baseUri("/oauth2/authorization")
                .authorizationRequestRepository(oAuth2AuthorizationRequestRepository())

                .and()
                .redirectionEndpoint()
                .baseUri("/*/oauth2/code/*")

                .and()
                .userInfoEndpoint()
                .userService(oAuth2UserService)

                .and()
                .successHandler(successHandler())
                .failureHandler(failureHandler());

        return http.build();
    }
}
