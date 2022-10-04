package com.cactusvilleage.server.challenge.web.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class ActiveInfoDto {
    private String challengeType;
    private int targetDate;
    private int progress;
    private String createdAt;
    private List<HistoryInfoResponseDto> histories = new ArrayList<>();

    @Builder
    public ActiveInfoDto(String challengeType, int targetDate, int progress, String createdAt, List<HistoryInfoResponseDto> histories) {
        this.challengeType = challengeType;
        this.targetDate = targetDate;
        this.progress = progress;
        this.createdAt = createdAt;
        this.histories = histories;
    }
}
