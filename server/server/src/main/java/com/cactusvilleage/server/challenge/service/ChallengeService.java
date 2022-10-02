package com.cactusvilleage.server.challenge.service;

import com.cactusvilleage.server.auth.entities.Member;
import com.cactusvilleage.server.auth.service.MemberService;
import com.cactusvilleage.server.auth.util.SecurityUtil;
import com.cactusvilleage.server.challenge.delegation.DelegationData;
import com.cactusvilleage.server.challenge.entities.Challenge;
import com.cactusvilleage.server.challenge.repository.ChallengeRepository;
import com.cactusvilleage.server.challenge.web.dto.request.EnrollDto;
import com.cactusvilleage.server.challenge.web.dto.response.EnrollResponseDto;
import com.cactusvilleage.server.global.exception.BusinessLogicException;
import com.cactusvilleage.server.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.cactusvilleage.server.challenge.entities.Status.*;
import static com.cactusvilleage.server.global.exception.ExceptionCode.*;


@Service
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

}
