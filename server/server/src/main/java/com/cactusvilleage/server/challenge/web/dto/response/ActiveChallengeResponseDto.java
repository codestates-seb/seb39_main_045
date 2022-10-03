package com.cactusvilleage.server.challenge.web.dto.response;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class ActiveChallengeResponseDto {
    private String challengeType;
    private int targetDate;
    private int progress;
    private List<Histories> histories = new ArrayList<>();

    @Builder
    public ActiveChallengeResponseDto(String challengeType, int targetDate, int progress, List<Histories> histories) {
        this.challengeType = challengeType;
        this.targetDate = targetDate;
        this.progress = progress;
        this.histories = histories;
    }

    @Getter
    @NoArgsConstructor
    public static class Histories {
        private int day;
        private String contents;
        private String time;

        @Builder
        public Histories(int day, String contents, String time) {
            this.day = day;
            this.contents = contents;
            this.time = time;
        }
    }

}
