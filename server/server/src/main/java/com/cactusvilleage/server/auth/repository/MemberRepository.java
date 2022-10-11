package com.cactusvilleage.server.auth.repository;
import com.cactusvilleage.server.auth.entities.Member;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    @Transactional(readOnly = true)
    Optional<Member> findByEmail(String email);
    @Transactional(readOnly = true)
    Member findByProviderId(String providerId);
    @Transactional(readOnly = true)
    boolean existsByEmail(String email);
    @Transactional(readOnly = true)
    boolean existsByUsername(String username);
    @Transactional(readOnly = true)
    boolean existsByProviderId(String providerId);
    @Transactional(readOnly = true)
    List<Member> findAllByDeleted(boolean deleted, Sort sort);
}
