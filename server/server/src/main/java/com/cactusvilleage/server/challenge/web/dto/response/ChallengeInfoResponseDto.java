package com.cactusvilleage.server.challenge.web.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

public interface ChallengeInfoResponseDto {
    @Getter
    @NoArgsConstructor
    class Histories {
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
