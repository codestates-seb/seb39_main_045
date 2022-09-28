package com.cactusvilleage.server.auth.repository;

import com.cactusvilleage.server.auth.entities.RefreshToken;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.stream.Collectors;

//트랜잭션?
public interface RefreshTokenRepository extends CrudRepository<RefreshToken, String> {
    List<RefreshToken> findAll();
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
