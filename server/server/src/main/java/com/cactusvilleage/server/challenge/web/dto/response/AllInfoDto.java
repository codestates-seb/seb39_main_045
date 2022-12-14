package com.cactusvilleage.server.challenge.web.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class AllInfoDto {
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
        private boolean success;
        private String type;
        private int targetDate;
        private Integer targetTime;
        private List<HistoryInfoResponseDto> histories = new ArrayList<>();

        @Builder
        public Challenges(String index, boolean success, String type, int targetDate, Integer targetTime, List<HistoryInfoResponseDto> histories) {
            this.index = index;
            this.success = success;
            this.type = type;
            this.targetDate = targetDate;
            this.targetTime = targetTime;
            this.histories = histories;
        }
    }

}
