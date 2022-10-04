package com.cactusvilleage.server.challenge.service;

import com.cactusvilleage.server.auth.entities.Member;
import com.cactusvilleage.server.auth.repository.MemberRepository;
import com.cactusvilleage.server.auth.service.MemberService;
import com.cactusvilleage.server.auth.util.SecurityUtil;
import com.cactusvilleage.server.challenge.validator.ChallengeValidator;
import com.cactusvilleage.server.challenge.entities.Challenge;
import com.cactusvilleage.server.challenge.repository.ChallengeRepository;
import com.cactusvilleage.server.challenge.web.dto.request.EnrollDto;
import com.cactusvilleage.server.challenge.web.dto.response.HistoryInfoResponseDto;
import com.cactusvilleage.server.challenge.web.dto.response.EnrollResponseDto;
import com.cactusvilleage.server.challenge.web.dto.response.RankingResponseDto;
import com.cactusvilleage.server.challenge.web.dto.response.WateringResponseDto;
import com.cactusvilleage.server.challenge.web.dto.response.ActiveInfoDto;
import com.cactusvilleage.server.challenge.web.dto.response.AllInfoDto;
import com.cactusvilleage.server.global.exception.BusinessLogicException;
import com.cactusvilleage.server.global.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;
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
    private final MemberRepository memberRepository;
    private final static int RANKER_SIZE = 3;
    @Value("classpath:/static/water.txt")
    private Resource fileResource;

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
        ChallengeValidator data = new ChallengeValidator(challengeRepository);
        Challenge challenge = data.validateActiveChallenge();

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
            ChallengeValidator data = new ChallengeValidator(challengeRepository);
            Challenge challenge = data.validateActiveChallenge();

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

    public ResponseEntity getMessage() {
        ChallengeValidator data = new ChallengeValidator(challengeRepository);
        data.validateActiveChallenge();

        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(fileResource.getInputStream()));

            List<String> lines = br.lines().collect(Collectors.toList());
            int index = new Random().nextInt(lines.size());
            String text = lines.get(index);

            return new ResponseEntity<>(new SingleResponseDto<>(new WateringResponseDto(text)), HttpStatus.OK);
        } catch (IOException e) {
            e.printStackTrace();
        }
        //default message when can't read static file
        return new ResponseEntity<>(new SingleResponseDto<>(new WateringResponseDto("선인장 키우기와 함께 해주셔서 감사합니다! 앞으로도 화이팅!")), HttpStatus.OK);
    }

    public ResponseEntity getRankInfo() {
        List<Map.Entry<Member, Long>> collect = challengeRepository.findAll().stream()
                .filter(success -> success.getStatus().equals(SUCCESS))
                .filter(user -> !user.getMember().isDeleted())
                .collect(Collectors.groupingBy(Challenge::getMember, Collectors.counting()))
                .entrySet().stream()
                .sorted(Collections.reverseOrder(Map.Entry.comparingByValue()))
                .collect(Collectors.toList());

        Member member = memberService.findMember(SecurityUtil.getCurrentMemberId());

        RankingResponseDto response = RankingResponseDto.builder()
                .rankers(getRankers(collect, RANKER_SIZE))
                .myRanking(getMyRank(collect, member, RANKER_SIZE))
                .myStamps(getMyStamps(member))
                .build();

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    public ResponseEntity setNotificationStatus() {
        Long memberId = SecurityUtil.getCurrentMemberId();
        Member member = memberService.findMember(memberId);
        Challenge recentChallenge = memberService.getRecentChallenge(member);
        recentChallenge.setNotified(true);
        challengeRepository.save(recentChallenge);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    private Integer getRank(List<Map.Entry<Member, Long>> collect, Member member) {
        Optional<Long> optionalRank = collect.stream()
                .filter(map -> map.getKey().equals(member))
                .findFirst()
                .map(Map.Entry::getValue);

        if (optionalRank.isEmpty()) {
            return collect.size() + 1;
        } else {
            Map.Entry<Member, Long> me = collect.stream()
                    .filter(key -> key.getKey().equals(member))
                    .findFirst()
                    .orElseThrow();

            return collect.indexOf(me) + 1;
        }
    }

    private List<RankingResponseDto.Rankers> getRankers(List<Map.Entry<Member, Long>> collect, int rankerSize) {
        List<RankingResponseDto.Rankers> rankers = new ArrayList<>();

        if (collect.size() < rankerSize) {
            List<Member> members = memberRepository.findAllByDeleted(false, Sort.by(Sort.Direction.ASC, "id"));

            if (collect.isEmpty()) {
                for (int i = 0; i < rankerSize; i++) {
                    RankingResponseDto.Rankers ranker = RankingResponseDto.Rankers.builder()
                            .rank(i + 1)
                            .username(members.get(i).getUsername())
                            .stamps(0)
                            .build();
                    rankers.add(ranker);
                }
                return rankers;
            } else {
                List<RankingResponseDto.Rankers> validRankers = getValidRankers(collect, collect.size(), new ArrayList<>());

                for (Member member : members) {
                    boolean flag = false;
                    for (RankingResponseDto.Rankers validRanker : validRankers) {
                        flag = member.getUsername().equals(validRanker.getUsername());
                        if (flag) {
                            break;
                        }
                    }
                    if (flag) {
                        RankingResponseDto.Rankers dummy = RankingResponseDto.Rankers.builder()
                                .rank(validRankers.size() + 1)
                                .username(member.getUsername())
                                .stamps(0)
                                .build();
                        validRankers.add(dummy);
                    }
                    if (validRankers.size() == rankerSize) {
                        break;
                    }
                }

                return validRankers;
            }
        } else {
            return getValidRankers(collect, rankerSize, rankers);
        }
    }

    private List<RankingResponseDto.Rankers> getValidRankers(List<Map.Entry<Member, Long>> collect, int index, List<RankingResponseDto.Rankers> rankers) {
        for (int i = 0; i < index; i++) {
            Member member = collect.get(i).getKey();
            RankingResponseDto.Rankers ranker = RankingResponseDto.Rankers.builder()
                    .rank(getRank(collect, member))
                    .username(member.getUsername())
                    .stamps(collect.get(i).getValue().intValue())
                    .build();
            rankers.add(ranker);
        }
        return rankers;
    }


    private RankingResponseDto.MyRanking getMyRank(List<Map.Entry<Member, Long>> collect, Member member, int index) {
        Optional<RankingResponseDto.Rankers> rankerMe = getRankers(collect, RANKER_SIZE).stream()
                .filter(ranker -> ranker.getUsername().equals(member.getUsername()))
                .findAny();

        if (rankerMe.isPresent()) {
            return null;
        }

        if (collect.size() < index) {
            return RankingResponseDto.MyRanking.builder()
                    .rank(RANKER_SIZE + 1)
                    .username(member.getUsername())
                    .stamps(0)
                    .build();
        } else {
            return RankingResponseDto.MyRanking.builder()
                    .rank(getRank(collect, member))
                    .username(member.getUsername())
                    .stamps(getMyStamps(member).size())
                    .build();
        }
    }

    private List<Integer> getMyStamps(Member member) {
        List<Integer> stamps = member.getChallenges().stream()
                .map(Challenge::getStamp)
                .filter(stamp -> stamp != 0)
                .collect(Collectors.toList());
        if (stamps.isEmpty()) {
            return new ArrayList<>();
        } else {
            return stamps;
        }
    }

    private List<HistoryInfoResponseDto> setHistoryInfo(Challenge challenge) {
        AtomicInteger index = new AtomicInteger(1);

        return challenge.getHistories().stream()
                .map(origin -> HistoryInfoResponseDto.builder()
                        .day(index.getAndIncrement())
                        .createdAt(origin.getCreatedAt().toLocalDate().toString())
                        .contents(origin.getContents())
                        .time(origin.getTime())
                        .build())
                .collect(Collectors.toList());
    }
}
