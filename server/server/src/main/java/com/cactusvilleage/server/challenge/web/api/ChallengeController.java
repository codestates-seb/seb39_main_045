package com.cactusvilleage.server.challenge.web.api;

import com.cactusvilleage.server.auth.validator.InvalidChallengeType;
import com.cactusvilleage.server.challenge.service.ChallengeService;
import com.cactusvilleage.server.challenge.web.dto.request.EnrollDto;
import com.cactusvilleage.server.challenge.web.dto.response.EnrollResponseDto;
import com.cactusvilleage.server.global.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/challenges")
@RequiredArgsConstructor
@Slf4j
@Validated
public class ChallengeController {

    private final ChallengeService challengeService;

    @PostMapping
    public ResponseEntity enrollChallenge(@RequestBody EnrollDto enrollDto,
                                          @RequestParam("type") @InvalidChallengeType String type) {

        EnrollResponseDto enrollChallenge = challengeService.enrollChallenge(enrollDto, type);

        return new ResponseEntity<>(
                new SingleResponseDto<>(enrollChallenge), HttpStatus.CREATED);
    }

}
