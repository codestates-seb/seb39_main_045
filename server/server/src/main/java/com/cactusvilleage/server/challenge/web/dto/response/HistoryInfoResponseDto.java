package com.cactusvilleage.server.challenge.web.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class HistoryInfoResponseDto {
    private int day;
    private String createdAt;
    private String contents;
    private String time;

    @Builder
    public HistoryInfoResponseDto(int day, String createdAt, String contents, String time) {
        this.day = day;
        this.createdAt = createdAt;
        this.contents = contents;
        this.time = time;
    }

}
