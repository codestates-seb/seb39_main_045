package com.cactusvilleage.server.challenge.delegation;


import com.cactusvilleage.server.auth.util.SecurityUtil;
import com.cactusvilleage.server.challenge.entities.Challenge;
import com.cactusvilleage.server.challenge.repository.ChallengeRepository;
import com.cactusvilleage.server.global.exception.BusinessLogicException;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

import static com.cactusvilleage.server.global.exception.ExceptionCode.CHALLENGE_NOT_FOUND;
import static com.cactusvilleage.server.global.exception.ExceptionCode.ENROLL_CHALLENGE_CANNOT_BE_DUPLICATED;

@Getter
@Component
@RequiredArgsConstructor
@Slf4j
public class DelegationData {

    private final ChallengeRepository challengeRepository;

    public Challenge validateChallenge() {
        List<Challenge> validateChallenge = challengeRepository.findAll().stream()
                .filter(found -> found.isActive() && found.getMember().getId().equals(SecurityUtil.getCurrentMemberId()))
                .collect(Collectors.toList());
        if (validateChallenge.isEmpty()) {  // 리스트 비어있으면 챌린지 없다는 exception 반환
            throw new BusinessLogicException(CHALLENGE_NOT_FOUND);
        } else if (validateChallenge.size() > 1) { // 리스트의 크기가 1 초과면 중복 챌린지라는 exception 반환
            throw new BusinessLogicException(ENROLL_CHALLENGE_CANNOT_BE_DUPLICATED);
        }

        return validateChallenge.get(0);
    }
}
