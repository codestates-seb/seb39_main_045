package com.cactusvilleage.server.challenge.web.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class WateringResponseDto {
    private String text;

    public WateringResponseDto(String text) {
        this.text = text;
    }
}
