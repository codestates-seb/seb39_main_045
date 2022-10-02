package com.cactusvilleage.server.challenge.repository;

import com.cactusvilleage.server.challenge.entities.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
}
