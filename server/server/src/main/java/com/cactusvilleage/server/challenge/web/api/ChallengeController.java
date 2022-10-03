package com.cactusvilleage.server.challenge.web.api;

import com.cactusvilleage.server.challenge.service.ChallengeService;
import com.cactusvilleage.server.challenge.validator.ChallengeStatus;
import com.cactusvilleage.server.challenge.validator.ValidatedChallengeType;
import com.cactusvilleage.server.challenge.web.dto.request.EnrollDto;
import com.cactusvilleage.server.challenge.web.dto.response.ActiveChallengeResponseDto;
import com.cactusvilleage.server.challenge.web.dto.response.EnrollResponseDto;
import com.cactusvilleage.server.global.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/api/v1/challenges")
@RequiredArgsConstructor
@Validated
@Slf4j
public class ChallengeController {

    private final ChallengeService challengeService;

    @PostMapping
    public ResponseEntity enrollChallenge(@RequestBody @Valid EnrollDto enrollDto,
                                          @RequestParam("type") @Valid @ValidatedChallengeType String type) {

        EnrollResponseDto response = challengeService.enrollChallenge(enrollDto, type);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    @DeleteMapping
    public ResponseEntity deleteChallenge() {
        challengeService.delete();
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @GetMapping
    public ResponseEntity getChallengeRecords(@RequestParam @Nullable @ChallengeStatus String active) {
        ActiveChallengeResponseDto response = challengeService.getRecords(active);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }
}
