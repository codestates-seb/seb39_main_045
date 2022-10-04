package com.cactusvilleage.server.challenge.web.api;

import com.cactusvilleage.server.challenge.service.HistoryStudyService;
import com.cactusvilleage.server.challenge.web.dto.request.StudyDto;
import com.cactusvilleage.server.challenge.web.dto.response.HistoryResponseDto;
import com.cactusvilleage.server.global.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import java.io.IOException;


@RestController
@RequestMapping("/api/v1/histories")
@RequiredArgsConstructor
public class StudyController {

    private final HistoryStudyService historyStudyService;

    @PostMapping(path = "/study", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity uploadStudy(@RequestPart @Valid StudyDto request,
                                      @RequestPart @Valid @NotBlank MultipartFile multipartFile) throws IOException {

        HistoryResponseDto response = historyStudyService.uploadStudyHistory(request, multipartFile);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.CREATED);

    }

}
