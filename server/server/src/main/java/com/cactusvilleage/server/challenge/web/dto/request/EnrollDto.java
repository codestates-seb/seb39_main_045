package com.cactusvilleage.server.challenge.web.dto.request;

import com.cactusvilleage.server.challenge.validator.ValidatedTargetDate;
import lombok.*;
import org.springframework.lang.Nullable;


@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class EnrollDto {

    // ChallengeType 헤더로 받음

    @ValidatedTargetDate
    private Integer targetDate;

    @Nullable
    private Integer targetTime;

}
