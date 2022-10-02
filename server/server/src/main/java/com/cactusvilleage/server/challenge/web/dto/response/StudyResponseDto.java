package com.cactusvilleage.server.challenge.web.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class StudyResponseDto {

    private int progress;

    @Builder
    public StudyResponseDto(int progress) {
        this.progress = progress;
    }
}

