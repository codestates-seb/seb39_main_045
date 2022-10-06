package com.cactusvilleage.server.challenge.service;


import com.cactusvilleage.server.challenge.validator.ChallengeValidator;
import com.cactusvilleage.server.challenge.entities.Challenge;
import com.cactusvilleage.server.challenge.entities.History;
import com.cactusvilleage.server.challenge.repository.ChallengeRepository;
import com.cactusvilleage.server.challenge.repository.HistoryRepository;
import com.cactusvilleage.server.challenge.web.dto.request.ThanksDto;
import com.cactusvilleage.server.challenge.web.dto.response.HistoryResponseDto;
import com.cactusvilleage.server.global.exception.BusinessLogicException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Random;

import static com.cactusvilleage.server.challenge.entities.Status.*;
import static com.cactusvilleage.server.global.exception.ExceptionCode.CHALLENGE_TYPE_MISS_MATCH;
import static com.cactusvilleage.server.global.exception.ExceptionCode.ENROLL_HISTORY_CANNOT_BE_DUPLICATED;

@Service
@RequiredArgsConstructor
public class HistoryThanksService {

    private final HistoryRepository historyRepository;
    private final ChallengeRepository challengeRepository;

    public HistoryResponseDto uploadThanksHistory(ThanksDto thanksDto) {

        ChallengeValidator data = new ChallengeValidator(challengeRepository);

        Challenge challenge = data.validateActiveChallenge();

        Challenge.ChallengeType type = challenge.getChallengeType();

        if (!type.equals(Challenge.ChallengeType.THANKS)) {
            throw new BusinessLogicException(CHALLENGE_TYPE_MISS_MATCH);
        }

        History history = History.builder()
                .createdAt(LocalDateTime.now())
                .contents(thanksDto.getText())
                .build();

        // 진행 중인 챌린지에서 히스토리 가져오기
        List<History> histories = challenge.getHistories();

        // 중복 등록 방지
        if (histories.isEmpty()) { // 처음 진행하는 히스토리 등록
            history.setChallenge(challenge);
            historyRepository.save(history);
        } else { // 그게 아닌 경우, 가장 최근 히스토리를 가져와서 어제날짜와 비교해 같으면 등록
            History recentHistory = histories.get(histories.size() - 1);
            LocalDate date = recentHistory.getCreatedAt().toLocalDate();
            if (Objects.equals(date, LocalDate.now().minusDays(1))) {
                history.setChallenge(challenge);
                historyRepository.save(history);
            } else { // 그 외의 경우는 중복 등록이라 판단
                throw new BusinessLogicException(ENROLL_HISTORY_CANNOT_BE_DUPLICATED);
            }
        }
        // 진행도 계산
        int progress = (int) ((double) challenge.getHistories().size() / challenge.getTargetDate() * 100);

        // 챌린지 완료(진행도 100)하면 status Success, 도장 찍기 1~8 랜덤 숫자
        if (progress == 100) {
            challenge.setStatus(SUCCESS);
            challenge.setStamp(new Random().nextInt(8) + 1);
            history.setChallenge(challenge);
            historyRepository.save(history);
        }

        return HistoryResponseDto.builder()
                .progress(progress)
                .status(challenge.getStatus().toString().toLowerCase())
                .build();
    }
}
