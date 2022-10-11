package com.cactusvilleage.server.auth.repository;

import com.cactusvilleage.server.auth.entities.Member;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);

    Member findByProviderId(String providerId);
    boolean existsByEmail(String email);
    boolean existsByUsername(String username);
    boolean existsByProviderId(String providerId);
    List<Member> findAllByDeleted(boolean deleted, Sort sort);

}
