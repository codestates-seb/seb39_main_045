package com.cactusvilleage.server.challenge.web.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class ActiveInfoDto {
    private String challengeType;
    private int targetDate;
    private int progress;
    private List<HistoryInfoResponseDto> histories = new ArrayList<>();

    @Builder
    public ActiveInfoDto(String challengeType, int targetDate, int progress, List<HistoryInfoResponseDto> histories) {
        this.challengeType = challengeType;
        this.targetDate = targetDate;
        this.progress = progress;
        this.histories = histories;
    }
}
