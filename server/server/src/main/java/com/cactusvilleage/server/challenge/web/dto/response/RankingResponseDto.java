package com.cactusvilleage.server.challenge.web.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class RankingResponseDto {
    private List<RankingResponseDto.Rankers> rankers;
    private RankingResponseDto.MyRanking myRanking;
    private List<Integer> myStamps;

    @Builder
    public RankingResponseDto(List<Rankers> rankers, MyRanking myRanking, List<Integer> myStamps) {
        this.rankers = rankers;
        this.myRanking = myRanking;
        this.myStamps = myStamps;
    }

    @Getter
    @NoArgsConstructor
    public static class Rankers {
        private int rank;
        private String username;
        private int stamps;

        @Builder
        public Rankers(int rank, String username, int stamps) {
            this.rank = rank;
            this.username = username;
            this.stamps = stamps;
        }
    }

    @Getter
    @NoArgsConstructor
    public static class MyRanking {
        private int rank;
        private String username;
        private int stamps;

        @Builder
        public MyRanking(int rank, String username, int stamps) {
            this.rank = rank;
            this.username = username;
            this.stamps = stamps;
        }
    }
}
