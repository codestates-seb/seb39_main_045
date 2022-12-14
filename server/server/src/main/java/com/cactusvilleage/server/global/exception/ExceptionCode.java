package com.cactusvilleage.server.global.exception;


import lombok.Getter;
import lombok.Setter;

public enum ExceptionCode {

    MEMBER_NOT_FOUND(404, "회원 정보를 찾으 수 없습니다."),
    MEMBER_NOT_MATCH(401, "이메일과 비밀번호가 일치하지 않습니다."),
    ONLY_FOR_MEMBER(403, "회원 인증에 실패했습니다."),
    ONLY_FOR_ADMIN(401, "접근 권한이 없습니다."),
    WRONG_JWT_SIGNATURE(403, "잘못된 JWT 서명입니다."),
    EXPIRED_JWT_TOKEN(403, "만료된 JWT 토큰입니다."),
    UNSUPPORTED_JWT_TOKEN(403, "지원되지 않는 JWT 토큰입니다."),
    WRONG_JWT_ARGUMENT(403, "올바르지 않은 JWT 토큰입니다."),
    TOKEN_HAS_NO_AUTH(403, "권한 정보가 없는 토큰입니다."),
    NO_AUTHENTICATION(401, "인증 정보가 없습니다."),
    EXPIRED_ACCESS_CODE(403, "이메일 인증 시간 만료."),
    MEMBER_INFO_EXISTS(400, ""),
    WRONG_REDIRECT_URI(400, "요청 redirect_uri 파라미터 값이 잘못되었습니다."),
    ENROLL_CHALLENGE_CANNOT_BE_DUPLICATED(403,"챌린지 등록은 한 번에 하나만 할 수 있습니다."),
    ENROLL_HISTORY_CANNOT_BE_DUPLICATED(403, "히스토리는 하루에 한 번만 등록 가능합니다."),
    CHALLENGE_NOT_FOUND(404, "진행 중인 챌린지를 찾을 수 없습니다."),
    CHALLENGE_TYPE_MISS_MATCH(400, "챌린지 타입이 맞지 않습니다."),
    CHALLENGE_TARGET_TIME_NOT_NULL(400, "목표 시간은 필수 값 입니다."),
    NOT_SUPPORTED_PROVIDER(400, "지원하지 않는 소셜 연동 경로입니다."),
    SEND_EMAIL_FAILED(500, "이메일 전송에 실패했습니다.");

    @Getter
    private int status;

    @Getter
    @Setter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
