package com.cactusvilleage.server.challenge.repository;

import com.cactusvilleage.server.challenge.entities.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
    @Transactional(readOnly = true)
    List<Challenge> findAllByMemberId(Long memberId);

}