package com.cactusvilleage.server.auth.web.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisStaticMasterReplicaConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;

@Configuration
public class RedisConfig {

    //추후 서버 설정
    @Value("${spring.redis.host}")
    private String host;
    @Value("${spring.redis.port}")
    private int port;

    @Bean
    public LettuceConnectionFactory connectionFactory() {
        return new LettuceConnectionFactory(host, port);
//        return new LettuceConnectionFactory(new RedisStandaloneConfiguration(host, port));
//        return new LettuceConnectionFactory(new RedisStaticMasterReplicaConfiguration(host, port));
    }
}
