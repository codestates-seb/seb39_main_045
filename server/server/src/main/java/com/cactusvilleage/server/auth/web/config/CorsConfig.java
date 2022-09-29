package com.cactusvilleage.server.auth.web.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@Slf4j
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOriginPattern("https://dev.cactus-villeage.com");
        config.addAllowedOriginPattern("http://dev.cactus-villeage.com");
        config.addAllowedOriginPattern("https://api.cactus-villeage.com");
        config.addAllowedOriginPattern("http://api.cactus-villeage.com");
        config.addAllowedOriginPattern("http://localhost:3000");

        log.warn("addAllowedOriginPatterns={}", config.getAllowedOriginPatterns());

        config.addAllowedOriginPattern("*");

        config.addAllowedMethod("*");
        config.addAllowedHeader("*");
        config.addExposedHeader("Authorization");

        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    }
}
