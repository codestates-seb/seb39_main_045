package com.cactusvilleage.server.challenge.web.dto.response;

import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class EnrollResponseDto {

    private String challengeType;

    private boolean active;

    private int progress;

    @Builder
    public EnrollResponseDto(String challengeType, boolean active) {
        this.challengeType = challengeType;
        this.active = active;
    }
}
