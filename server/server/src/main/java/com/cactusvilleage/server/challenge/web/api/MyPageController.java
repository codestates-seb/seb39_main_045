package com.cactusvilleage.server.challenge.web.api;

import com.cactusvilleage.server.challenge.service.ChallengeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class MyPageController {

    private final ChallengeService challengeService;

    @GetMapping("/rankings")
    public ResponseEntity sendRankings() {
        return challengeService.getRankInfo();
    }

}
