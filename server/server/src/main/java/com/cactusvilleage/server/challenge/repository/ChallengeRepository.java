package com.cactusvilleage.server.challenge.repository;

import com.cactusvilleage.server.challenge.entities.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
    List<Challenge> findAllByMemberId(Long memberId);

}
