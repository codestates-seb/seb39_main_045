package com.cactusvilleage.server.auth.web.dto.plain.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class MemberInfoResponse {
    private String email;
    private String username;
    private Status status;
    private int progress;
    private String challengeType;
    private String providerType;

    public enum Status {
        FAIL, NONE, IN_PROGRESS
    }

}

