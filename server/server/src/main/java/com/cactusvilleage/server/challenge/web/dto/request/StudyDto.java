package com.cactusvilleage.server.challenge.web.dto.request;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.validation.constraints.NotBlank;

@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class StudyDto {

    @NotBlank
    private String time; // 공부 시간

    // image @RequestPart
}
