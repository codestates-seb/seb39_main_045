package com.cactusvilleage.server.challenge.web.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class StudyResponseDto {

    private int progress;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String imagePath; // 이미지 경로 url, String 값

    @Builder
    public StudyResponseDto(int progress, @Nullable String imagePath) {
        this.progress = progress;
        this.imagePath = imagePath;
    }
}

