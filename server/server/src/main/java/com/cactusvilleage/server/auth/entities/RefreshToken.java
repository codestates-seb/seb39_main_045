package com.cactusvilleage.server.auth.entities;

import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Getter
@Builder
@RedisHash(value = "token", timeToLive = 1209600)
public class RefreshToken {
    @Id
    private String tokenId;
    private String memberId;
    private String tokenValue;
}
