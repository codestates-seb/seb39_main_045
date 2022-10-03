package com.cactusvilleage.server.challenge.web.dto.response.impl;

import com.cactusvilleage.server.challenge.web.dto.response.ChallengeInfoResponseDto;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class ActiveInfoDto implements ChallengeInfoResponseDto {
    private String challengeType;
    private int targetDate;
    private int progress;
    private List<Histories> histories = new ArrayList<>();

    @Builder
    public ActiveInfoDto(String challengeType, int targetDate, int progress, List<Histories> histories) {
        this.challengeType = challengeType;
        this.targetDate = targetDate;
        this.progress = progress;
        this.histories = histories;
    }
}
