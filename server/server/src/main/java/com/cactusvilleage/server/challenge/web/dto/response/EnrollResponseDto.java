package com.cactusvilleage.server.challenge.web.dto.response;

import com.cactusvilleage.server.challenge.entities.Challenge;
import lombok.*;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class EnrollResponseDto {

    @NotBlank
    private Challenge.ChallengeType challengeType;

    @NotBlank
    private boolean active;

    @NotBlank
    private int progress = 0;

    @Builder
    public EnrollResponseDto(Challenge.ChallengeType challengeType, boolean active, int progress) {
        this.challengeType = challengeType;
        this.active = active;
        this.progress = progress;
    }
}
