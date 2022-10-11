package com.cactusvilleage.server.challenge.web.api;

import com.cactusvilleage.server.challenge.service.HistoryThanksService;
import com.cactusvilleage.server.challenge.web.dto.request.ThanksDto;
import com.cactusvilleage.server.challenge.web.dto.response.HistoryResponseDto;
import com.cactusvilleage.server.global.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/histories")
@RequiredArgsConstructor
public class ThanksController {

    private final HistoryThanksService historyThanksService;

    @PostMapping(path = "/thanks")
    public ResponseEntity uploadThanks(@RequestBody @Valid ThanksDto thanksDto) {

        HistoryResponseDto response = historyThanksService.uploadThanksHistory(thanksDto);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.CREATED);

    }
}
