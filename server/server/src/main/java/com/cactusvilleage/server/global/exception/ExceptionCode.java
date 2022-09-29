package com.cactusvilleage.server.global.exception;


import lombok.Getter;
import lombok.Setter;

public enum ExceptionCode {

    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_NOT_MATCH(401, "이메일과 비밀번호가 일치하지 않습니다"),
    ONLY_FOR_MEMBER(403, "Authentication Failed"),
    ONLY_FOR_ADMIN(401, "Authorization Failed"),
    WRONG_JWT_SIGNATURE(403, "잘못된 JWT 서명입니다."),
    EXPIRED_JWT_TOKEN(403, "만료된 JWT 토큰입니다"),
    UNSUPPORTED_JWT_TOKEN(403, "지원되지 않는 JWT 토큰입니다"),
    WRONG_JWT_ARGUMENT(403, "올바르지 않은 JWT 토큰입니다"),
    TOKEN_HAS_NO_AUTH(403, "권한 정보가 없는 토큰입니다"),
    NO_AUTHENTICATION(401, "인증 정보가 없습니다"),
    EXPIRED_ACCESS_CODE(403, "이메일 인증 시간 만료"),
    MEMBER_INFO_EXISTS(400, ""),
    PRE_PASSWORD_REQUIRED(400, "기존 비밀번호는 필수값입니다."),
    WRONG_REDIRECT_URI(400, "요청 redirect_uri 파라미터가 잘못되었습니다."),
    ENROLL_CHALLENGE_CANNOT_BE_DUPLICATED(401,"챌린지 등록은 한 번에 하나만 할 수 있습니다"),
    NOT_SUPPORTED_PROVIDER(400, "지원하지 않는 소셜 경로입니다.");

    @Getter
    private int status;

    @Getter
    @Setter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
