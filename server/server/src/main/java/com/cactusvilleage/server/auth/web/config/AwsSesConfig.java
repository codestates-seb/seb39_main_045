package com.cactusvilleage.server.auth.web.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.ses.SesAsyncClient;

@Configuration
public class AwsSesConfig {
    @Value("${aws.ses.access-key}")
    private String accessKey;
    @Value("${aws.ses.secret-key}")
    private String secretKey;

    @Bean
    public SesAsyncClient sesAsyncClient() {

        return SesAsyncClient.builder()
                .credentialsProvider(() -> AwsBasicCredentials.create(accessKey, secretKey))
                .region(Region.AP_NORTHEAST_2)
                .build();
    }

}
