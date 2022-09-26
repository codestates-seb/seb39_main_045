package com.cactusvilleage.server.auth.entities;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Getter
@RedisHash(value = "token", timeToLive = 1209600L)
@Builder
@ToString
public class RefreshToken {
    @Id
    private String tokenId;
    private String memberId;
    private String tokenValue;
}
