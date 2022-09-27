package com.cactusvilleage.server.auth.web.config;

import com.cactusvilleage.server.auth.entities.Authority;
import com.cactusvilleage.server.auth.repository.MemberRepository;
import com.cactusvilleage.server.auth.repository.OAuth2AuthorizationRequestRepository;
import com.cactusvilleage.server.auth.repository.RefreshTokenRepository;
import com.cactusvilleage.server.auth.service.CustomOAuth2UserService;
import com.cactusvilleage.server.auth.util.HeaderUtil;
import com.cactusvilleage.server.auth.util.TokenProvider;
import com.cactusvilleage.server.auth.web.exception.JwtAccessDeniedHandler;
import com.cactusvilleage.server.auth.web.exception.JwtAuthenticationEntryPoint;
import com.cactusvilleage.server.auth.web.filter.JwtExceptionHandlerFilter;
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
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;
    private final JwtExceptionHandlerFilter jwtExceptionHandlerFilter;
    private final TokenProvider tokenProvider;
    private final CustomOAuth2UserService oAuth2UserService;
    private final AppProperties appProperties;
    private final RefreshTokenRepository tokenRepository;


    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public HeaderUtil headerUtil() {
        return new HeaderUtil(tokenProvider, passwordEncoder(), tokenRepository);
    }

    @Bean
    public OAuth2AuthorizationRequestRepository oAuth2AuthorizationRequestRepository() {
        return new OAuth2AuthorizationRequestRepository();
    }

    @Bean
    public OAuth2AuthenticationSuccessHandler successHandler() {
        return new OAuth2AuthenticationSuccessHandler(appProperties, headerUtil(), oAuth2AuthorizationRequestRepository());
    }

    @Bean OAuth2AuthenticationFailureHandler failureHandler() {
        return new OAuth2AuthenticationFailureHandler(oAuth2AuthorizationRequestRepository());
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
                .antMatchers("/api/**").hasAnyAuthority("ROLE_USER")
                .antMatchers(HttpMethod.OPTIONS).permitAll()
                .antMatchers("/members/signup", "/members/login/**", "/members/recovery").permitAll()
                .antMatchers("/members/reissue", "/members/logout").permitAll()
                .antMatchers(HttpMethod.DELETE, "/members").permitAll()
                .antMatchers("/**/oauth2/**").permitAll()
                .anyRequest().authenticated()

                .and()
                .addFilterBefore(jwtExceptionHandlerFilter, CorsFilter.class)
                .addFilter(corsFilter)
                .apply(new JwtConfig(tokenProvider))

                .and()
                .exceptionHandling()
                .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .accessDeniedHandler(jwtAccessDeniedHandler)

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
