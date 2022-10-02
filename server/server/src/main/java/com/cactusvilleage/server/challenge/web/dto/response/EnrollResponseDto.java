package com.cactusvilleage.server.challenge.web.dto.response;

import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class EnrollResponseDto {

    private String challengeType;

    private int progress;

    @Builder
    public EnrollResponseDto(String challengeType) {
        this.challengeType = challengeType;
    }
}
