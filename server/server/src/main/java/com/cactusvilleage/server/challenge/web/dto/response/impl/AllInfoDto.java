package com.cactusvilleage.server.challenge.web.dto.response.impl;

import com.cactusvilleage.server.challenge.web.dto.response.ChallengeInfoResponseDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class AllInfoDto implements ChallengeInfoResponseDto {
    private int totalDate;
    private int totalChall;
    private List<Challenges> challenges = new ArrayList<>();

    @Builder
    public AllInfoDto(int totalDate, int totalChall, List<Challenges> challenges) {
        this.totalDate = totalDate;
        this.totalChall = totalChall;
        this.challenges = challenges;
    }

    @Getter
    @NoArgsConstructor
    public static class Challenges {
        private String index;
        private String createdAt;
        private boolean success;
        private String type;
        private int targetDate;
        private int targetTime;
        private List<Histories> histories = new ArrayList<>();

        @Builder
        public Challenges(String index, String createdAt, boolean success, String type, int targetDate, int targetTime, List<Histories> histories) {
            this.index = index;
            this.createdAt = createdAt;
            this.success = success;
            this.type = type;
            this.targetDate = targetDate;
            this.targetTime = targetTime;
            this.histories = histories;
        }
    }

}
