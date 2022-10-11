package com.cactusvilleage.server.auth.repository;

import com.cactusvilleage.server.auth.entities.RefreshToken;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

public interface RefreshTokenRepository extends CrudRepository<RefreshToken, String> {
    @Transactional(readOnly = true)
    List<RefreshToken> findAll();

    @Transactional
    default void checkRefreshToken(String memberId) {
        List<RefreshToken> all = findAll();
        List<RefreshToken> duplicateRefreshToken = all.stream()
                .filter(refreshToken -> refreshToken.getMemberId().equals(memberId))
                .collect(Collectors.toList());
        if (!duplicateRefreshToken.isEmpty()) {
            duplicateRefreshToken
                    .forEach(refreshToken -> deleteById(refreshToken.getTokenId()));
        }
    }
}