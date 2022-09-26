package com.cactusvilleage.server.auth.repository;

import com.cactusvilleage.server.auth.entities.RefreshToken;
import org.springframework.data.repository.CrudRepository;

//트랜잭션?
public interface RefreshTokenRepository extends CrudRepository<RefreshToken, String> {
}
