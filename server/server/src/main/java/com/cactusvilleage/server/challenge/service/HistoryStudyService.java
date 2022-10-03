package com.cactusvilleage.server.challenge.service;

import com.cactusvilleage.server.challenge.delegation.DelegationData;
import com.cactusvilleage.server.challenge.entities.Challenge;
import com.cactusvilleage.server.challenge.entities.History;
import com.cactusvilleage.server.challenge.repository.ChallengeRepository;
import com.cactusvilleage.server.challenge.repository.HistoryRepository;
import com.cactusvilleage.server.challenge.web.dto.request.StudyDto;
import com.cactusvilleage.server.challenge.web.dto.response.StudyResponseDto;
import com.cactusvilleage.server.global.exception.BusinessLogicException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import static com.cactusvilleage.server.global.exception.ExceptionCode.*;

@Service
@RequiredArgsConstructor
public class HistoryStudyService {
    private final HistoryRepository historyRepository;
    private final ChallengeRepository challengeRepository;
    private final S3Service s3Service;

    public StudyResponseDto uploadStudyHistory(StudyDto studyDto,
                                               MultipartFile multipartFile) throws IOException {

        DelegationData data = new DelegationData(challengeRepository);

        Challenge challenge = data.validateChallenge();

        Challenge.ChallengeType type = challenge.getChallengeType();

        if (!type.equals(Challenge.ChallengeType.STUDY)) {
            throw new BusinessLogicException(CHALLENGE_TYPE_MISS_MATCH);
        }

        // multipartFile를 s3Serive 서비스의 upload 메소드를 호출해서 담는다
        String path = s3Service.upload(multipartFile);

        // Dto <--> Entity 매핑 및 서비스 로직에서 Entity 매핑
        History history = History.builder()
                .time(studyDto.getTime()) // dto <--> entity
                .contents(path)
                .build();

        history.setChallenge(challenge);

        // historyRepository 저장
        historyRepository.save(history);

        int progress = (int) ((double) challenge.getHistories().size() / challenge.getTargetDate() * 100);

        // TODO progress가 100이면 스탬프 찍기

        // controller responseDto 타입 반환을 위해 매핑
        return StudyResponseDto.builder()
                .progress(progress)
                .build();
    }
}