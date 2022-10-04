package com.cactusvilleage.server.challenge.web.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Getter
@NoArgsConstructor
public class RankingResponseDto {
    private List<LinkedHashMap<Long, String>> rankings;
    private Map<Long, String> myRanking;
    private List<Integer> stamps;

    @Builder
    public RankingResponseDto(List<LinkedHashMap<Long, String>> rankings, Map<Long, String> myRanking, List<Integer> stamps) {
        this.rankings = rankings;
        this.myRanking = myRanking;
        this.stamps = stamps;
    }
}
