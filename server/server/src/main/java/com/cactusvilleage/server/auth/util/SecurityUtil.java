package com.cactusvilleage.server.auth.util;

import com.cactusvilleage.server.global.exception.BusinessLogicException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import static com.cactusvilleage.server.global.exception.ExceptionCode.NO_AUTHENTICATION;

public class SecurityUtil {

    public static Long getCurrentMemberId() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || authentication.getName() == null || authentication.getName().equals("anonymousUser")) {
            throw new BusinessLogicException(NO_AUTHENTICATION);
        }

        return Long.parseLong(authentication.getName());
    }

}
