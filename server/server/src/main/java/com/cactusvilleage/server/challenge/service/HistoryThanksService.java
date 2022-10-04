package com.cactusvilleage.server.challenge.service;


import com.cactusvilleage.server.challenge.delegation.DelegationData;
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
import java.util.List;
import java.util.Objects;
import java.util.Random;

import static com.cactusvilleage.server.challenge.entities.Status.SUCCESS;
import static com.cactusvilleage.server.global.exception.ExceptionCode.CHALLENGE_TYPE_MISS_MATCH;
import static com.cactusvilleage.server.global.exception.ExceptionCode.ENROLL_HISTORY_CANNOT_BE_DUPLICATED;

@Service
@RequiredArgsConstructor
public class HistoryThanksService {

    private final HistoryRepository historyRepository;
    private final ChallengeRepository challengeRepository;

    public HistoryResponseDto uploadThanksHistory(ThanksDto thanksDto) {

        DelegationData data = new DelegationData(challengeRepository);

        Challenge challenge = data.validateChallenge();

        Challenge.ChallengeType type = challenge.getChallengeType();

        if (!type.equals(Challenge.ChallengeType.THANKS)) {
            throw new BusinessLogicException(CHALLENGE_TYPE_MISS_MATCH);
        }

        History history = History.builder()
                .contents(thanksDto.getText())
                .build();

        // 진행 중인 챌린지에서 히스토리 가져오기
        List<History> histories = challenge.getHistories();

        // 중복 등록 방지
        if (histories.isEmpty()) {
            history.setChallenge(challenge);
            historyRepository.save(history);
        } else {
            History recentHistory = histories.get(histories.size() - 1);
            LocalDate date = recentHistory.getCreatedAt().toLocalDate();
            if (Objects.equals(date, LocalDate.now().minusDays(1))) {
                history.setChallenge(challenge);
                historyRepository.save(history);
            } else {
                throw new BusinessLogicException(ENROLL_HISTORY_CANNOT_BE_DUPLICATED);
            }
        }

        // 일일 챌린지 도전과제 성공 여부
        if (challenge.getHistories().size() == challenge.getTargetDate()) {
            challenge.setStatus(SUCCESS);
        }

        int progress = (int) ((double) challenge.getHistories().size() / challenge.getTargetDate() * 100);

        // 챌린지 완료(진행도 100)하면 status Success, 도장 찍기 1~8 랜덤 숫자
        if (progress == 100) {
            challenge.setStatus(SUCCESS);
            challenge.setStamp(new Random().nextInt(8) + 1);
        }

        return HistoryResponseDto.builder()
                .progress(progress)
                .status(challenge.getStatus().toString().toLowerCase())
                .build();
    }
}
