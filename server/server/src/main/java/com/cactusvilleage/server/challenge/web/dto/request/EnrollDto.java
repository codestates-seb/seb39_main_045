package com.cactusvilleage.server.challenge.web.dto.request;

import lombok.*;
import org.springframework.lang.Nullable;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class EnrollDto {

    // ChallengeType 헤더로 받음

    @NotBlank
    private int targetDate;

    @Nullable
    private Integer targetTime;

    @Builder
    public EnrollDto(int targetDate, int targetTime) {
        this.targetDate = targetDate;
        this.targetTime = targetTime;
    }
}
