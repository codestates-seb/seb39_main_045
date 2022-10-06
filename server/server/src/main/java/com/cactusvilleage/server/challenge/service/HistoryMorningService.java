package com.cactusvilleage.server.challenge.service;


import com.cactusvilleage.server.challenge.validator.ChallengeValidator;
import com.cactusvilleage.server.challenge.entities.Challenge;
import com.cactusvilleage.server.challenge.entities.History;
import com.cactusvilleage.server.challenge.repository.ChallengeRepository;
import com.cactusvilleage.server.challenge.repository.HistoryRepository;
import com.cactusvilleage.server.challenge.web.dto.request.MorningDto;
import com.cactusvilleage.server.challenge.web.dto.response.HistoryResponseDto;
import com.cactusvilleage.server.global.exception.BusinessLogicException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Random;

import static com.cactusvilleage.server.challenge.entities.Status.*;
import static com.cactusvilleage.server.global.exception.ExceptionCode.CHALLENGE_TYPE_MISS_MATCH;
import static com.cactusvilleage.server.global.exception.ExceptionCode.ENROLL_HISTORY_CANNOT_BE_DUPLICATED;

@Service
@RequiredArgsConstructor
public class HistoryMorningService {

    private final HistoryRepository historyRepository;
    private final ChallengeRepository challengeRepository;

    public HistoryResponseDto uploadMorningHistory(MorningDto morningDto) {

        ChallengeValidator data = new ChallengeValidator(challengeRepository);

        Challenge challenge = data.validateActiveChallenge();

        Challenge.ChallengeType type = challenge.getChallengeType();

        if (!type.equals(Challenge.ChallengeType.MORNING)) {
            throw new BusinessLogicException(CHALLENGE_TYPE_MISS_MATCH);
        }

        History history = History.builder()
                .time(morningDto.getTime()) // History 엔티티 <--> morningDto 매핑
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

        // 진행도 계산
        int progress = (int) ((double) challenge.getHistories().size() / challenge.getTargetDate() * 100);

        // 챌린지 완료(진행도 100)하면 status Success, 도장 찍기 1~8 랜덤 숫자
        if (progress == 100) {
            challenge.setStatus(SUCCESS);
            challenge.setStamp(new Random().nextInt(8) + 1);
            history.setChallenge(challenge);
            historyRepository.save(history);
        }

        // 클라이언트가 morningDto의 time을 localDateTime을 가공한 String 값으로 온다 (e.g "4:46:41 PM")
        // 시간 부분만 남길 수 있게 처리
        String strTime = morningDto.getTime();
        String[] timeArray = strTime.split(":");
        String timeString = timeArray[0];

        //json 문자열을 int로 변환
        int time = Integer.parseInt(timeString);

        // 일일 모닝 챌린지 도전과제 실패 조건
        // 현재 시간이 목표한 기상 시간보다 커버리면 실패
        if ((time > challenge.getTargetTime())) {
            challenge.setStatus(FAIL);
            progress = -1;
            history.setChallenge(challenge);
            historyRepository.save(history);
        }

        return HistoryResponseDto.builder()
                .progress(progress)
                .status(challenge.getStatus().toString().toLowerCase())
                .build();
    }
}
