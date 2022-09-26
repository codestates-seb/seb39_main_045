package com.cactusvilleage.server.auth.web.dto.plain.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class EditResponseDto {
    private String username;
}
