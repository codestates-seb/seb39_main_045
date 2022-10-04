package com.cactusvilleage.server.challenge.web.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class HistoryResponseDto {

    private int progress;

    private String status;

    @Builder
    public HistoryResponseDto(int progress, String status) {
        this.progress = progress;
        this.status = status;
    }
}

