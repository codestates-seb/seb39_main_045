package com.cactusvilleage.server.challenge.web.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class StudyResponseDto {

    private int progress;

    private String imagePath; // 이미지 경로 url, String 값

    @Builder
    public StudyResponseDto(int progress, String imagePath) {
        this.progress = progress;
        this.imagePath = imagePath;
    }
}

