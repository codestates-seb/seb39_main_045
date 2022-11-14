package com.cactusvilleage.server.challenge.service;

import com.cactusvilleage.server.challenge.validator.ChallengeValidator;
import com.cactusvilleage.server.challenge.entities.Challenge;
import com.cactusvilleage.server.challenge.entities.History;
import com.cactusvilleage.server.challenge.repository.ChallengeRepository;
import com.cactusvilleage.server.challenge.repository.HistoryRepository;
import com.cactusvilleage.server.challenge.web.dto.request.StudyDto;
import com.cactusvilleage.server.challenge.web.dto.response.HistoryResponseDto;
import com.cactusvilleage.server.global.exception.BusinessLogicException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Random;

import static com.cactusvilleage.server.challenge.entities.Status.*;
import static com.cactusvilleage.server.global.exception.ExceptionCode.*;

@Service
@RequiredArgsConstructor
@Transactional
public class HistoryStudyService {
    private final HistoryRepository historyRepository;
    private final ChallengeValidator challengeValidator;
    private final S3Service s3Service;

    public HistoryResponseDto uploadStudyHistory(StudyDto studyDto,
                                                 MultipartFile multipartFile) throws IOException {

        Challenge challenge = challengeValidator.validateActiveChallenge();

        Challenge.ChallengeType type = challenge.getChallengeType();

        if (!type.equals(Challenge.ChallengeType.STUDY)) {
            throw new BusinessLogicException(CHALLENGE_TYPE_MISS_MATCH);
        }

        // multipartFile를 s3Service 서비스의 upload 메소드를 호출해서 담는다
        String fileName = s3Service.upload(multipartFile);

        // Dto <--> Entity 매핑 및 서비스 로직에서 Entity 매핑
        History history = History.builder()
                .time(studyDto.getTime()) // dto <--> entity
                .contents(fileName)
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

        //json 문자열을 int로 변환
        int time = Integer.parseInt(studyDto.getTime());

        // 일일 챌린지 도전과제 등록 실패 조건 -> 실제 도전한 시간을 챌린지 목표 시간과 비교했을 때 작으면 실패
        if ((time < challenge.getTargetTime())) {
            challenge.setStatus(FAIL);
            progress = -1;
            history.setChallenge(challenge);
            historyRepository.save(history);
        }

        // controller responseDto 타입 반환을 위해 매핑
        return HistoryResponseDto.builder()
                .progress(progress)
                .status(challenge.getStatus().toString().toLowerCase())
                .build();
    }
}