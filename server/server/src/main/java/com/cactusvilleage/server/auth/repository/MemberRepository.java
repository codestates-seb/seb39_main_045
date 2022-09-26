package com.cactusvilleage.server.auth.repository;

import com.cactusvilleage.server.auth.entities.Member;
import com.cactusvilleage.server.auth.entities.oauth.ProviderType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);

    Member findByProviderId(String providerId);
    boolean existsByEmail(String email);
    boolean existsByUsername(String username);
    boolean existsByProviderId(String providerId);

}
