package com.cactusvilleage.server.challenge.service;

import com.cactusvilleage.server.auth.entities.Member;
import com.cactusvilleage.server.auth.service.MemberService;
import com.cactusvilleage.server.auth.util.SecurityUtil;
import com.cactusvilleage.server.challenge.delegation.DelegationData;
import com.cactusvilleage.server.challenge.entities.Challenge;
import com.cactusvilleage.server.challenge.repository.ChallengeRepository;
import com.cactusvilleage.server.challenge.web.dto.request.EnrollDto;
import com.cactusvilleage.server.challenge.web.dto.response.ChallengeInfoResponseDto;
import com.cactusvilleage.server.challenge.web.dto.response.EnrollResponseDto;
import com.cactusvilleage.server.challenge.web.dto.response.impl.ActiveInfoDto;
import com.cactusvilleage.server.challenge.web.dto.response.impl.AllInfoDto;
import com.cactusvilleage.server.global.exception.BusinessLogicException;
import com.cactusvilleage.server.global.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

import static com.cactusvilleage.server.challenge.entities.Status.*;
import static com.cactusvilleage.server.global.exception.ExceptionCode.CHALLENGE_TARGET_TIME_NOT_NULL;
import static com.cactusvilleage.server.global.exception.ExceptionCode.ENROLL_CHALLENGE_CANNOT_BE_DUPLICATED;


@Service
@Slf4j
@RequiredArgsConstructor
public class ChallengeService {

    private final MemberService memberService;
    private final ChallengeRepository challengeRepository;

    public EnrollResponseDto enrollChallenge(EnrollDto enrollDto, String type) {

        // 유저와 챌린지 매핑하기 위해 꺼내오기
        Member member = memberService.findMember(SecurityUtil.getCurrentMemberId());

        List<Challenge> validateChallenge = challengeRepository.findAll().stream()
                .filter(found -> found.getStatus().equals(IN_PROGRESS) && found.getMember().getId().equals(SecurityUtil.getCurrentMemberId()))
                .collect(Collectors.toList());

        // 회원 한 명당 하나의 챌린지만 등록할 수 있다
        if (!validateChallenge.isEmpty()) {
            throw new BusinessLogicException(ENROLL_CHALLENGE_CANNOT_BE_DUPLICATED);
        }

        // 감사 챌린지 말고 다른 챌린지는 targetTime 필드가 필수 값이라는 exception 발생
        if (!type.equals(Challenge.ChallengeType.THANKS.toString().toLowerCase())
                && enrollDto.getTargetTime() == null) {
            throw new BusinessLogicException(CHALLENGE_TARGET_TIME_NOT_NULL);
        }

        // Dto <--> Entity 매핑
        Challenge challenge = Challenge.builder()
                .challengeType(Challenge.ChallengeType.valueOf(type.toUpperCase())) // 쿼리파라미터로 받는 것과 Entity 매핑
                .targetDate(enrollDto.getTargetDate())
                .targetTime(enrollDto.getTargetTime())
                .build();

        challenge.setStatus(IN_PROGRESS);
        challenge.setMember(member);
        challengeRepository.save(challenge);

        // Controller 에서 responseDto 타입을 반환해야하기 때문에 매핑
        return EnrollResponseDto.builder()
                .challengeType(type)
                .build();
    }

    public void delete() {
        DelegationData data = new DelegationData(challengeRepository);
        Challenge challenge = data.validateChallenge();

        challenge.setStatus(DELETED);

        challengeRepository.save(challenge);
    }

    public ResponseEntity getRecords(String active) {
        if (active == null) {
            List<Challenge> all = challengeRepository.findAllByMemberId(SecurityUtil.getCurrentMemberId());
            List<Challenge> done = all.stream()
                    .filter(challenge -> challenge.getStatus().equals(SUCCESS) || challenge.getStatus().equals(FAIL))
                    .collect(Collectors.toList());

            if (done.isEmpty()) {
                AllInfoDto allInfo = AllInfoDto.builder()
                        .totalDate(0)
                        .totalChall(0)
                        .challenges(null)
                        .build();

                return new ResponseEntity<>(new SingleResponseDto<>(allInfo), HttpStatus.OK);
            }

            int totalDate = done.stream()
                    .map(Challenge::getHistories)
                    .map(List::size)
                    .mapToInt(i -> i)
                    .sum();

            AllInfoDto allInfo = AllInfoDto.builder()
                    .totalDate(totalDate)
                    .totalChall(done.size())
                    .challenges(done.stream()
                            .map(cEntity -> AllInfoDto.Challenges.builder()
                                    .index(cEntity.getUuid().toString())
                                    .createdAt(cEntity.getCreatedAt().toLocalDate().toString())
                                    .success(cEntity.getStatus().equals(SUCCESS))
                                    .type(cEntity.getChallengeType().toString().toLowerCase())
                                    .targetDate(cEntity.getTargetDate())
                                    .targetTime(cEntity.getTargetTime())
                                    .histories(setHistoryInfo(cEntity))
                                    .build())
                            .collect(Collectors.toList())
                    )
                    .build();

            return new ResponseEntity<>(new SingleResponseDto<>(allInfo), HttpStatus.OK);

        } else {
            DelegationData data = new DelegationData(challengeRepository);
            Challenge challenge = data.validateChallenge();

            ActiveInfoDto activeInfo = ActiveInfoDto.builder()
                    .challengeType(challenge.getChallengeType().toString().toLowerCase())
                    .targetDate(challenge.getTargetDate())
                    .progress((int) ((double) challenge.getHistories().size() / challenge.getTargetDate() * 100))
                    .createdAt(challenge.getCreatedAt().toLocalDate().toString())
                    .histories(setHistoryInfo(challenge))
                    .build();

            return new ResponseEntity<>(new SingleResponseDto<>(activeInfo), HttpStatus.OK);
        }
    }

    private List<ChallengeInfoResponseDto.Histories> setHistoryInfo(Challenge challenge) {
        AtomicInteger index = new AtomicInteger(1);

        return challenge.getHistories().stream()
                .map(origin -> ActiveInfoDto.Histories.builder()
                        .day(index.getAndIncrement())
                        .createdAt(origin.getCreatedAt().toLocalDate().toString())
                        .contents(origin.getContents())
                        .time(origin.getTime())
                        .build())
                .collect(Collectors.toList());
    }
}
