package com.cactusvilleage.server.challenge.repository;

import com.cactusvilleage.server.challenge.entities.History;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryRepository extends JpaRepository<History, Long> {
}
