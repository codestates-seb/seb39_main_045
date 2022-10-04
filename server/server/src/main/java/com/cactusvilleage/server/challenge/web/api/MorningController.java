package com.cactusvilleage.server.challenge.web.api;


import com.cactusvilleage.server.challenge.service.HistoryMorningService;
import com.cactusvilleage.server.challenge.web.dto.request.MorningDto;
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
@RequestMapping("/api/v1/morning")
@RequiredArgsConstructor
public class MorningController {

    private final HistoryMorningService historyMorningService;

    @PostMapping
    public ResponseEntity uploadMorning(@RequestBody @Valid MorningDto morningDto) {

        HistoryResponseDto response = historyMorningService.uploadMorningHistory(morningDto);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.CREATED);

    }
}
