package com.cactusvilleage.server.challenge.web.dto.request;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class MorningDto {

    @NotBlank
    private LocalDateTime morningTime;
}
