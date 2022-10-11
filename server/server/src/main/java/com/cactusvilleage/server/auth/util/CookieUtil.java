package com.cactusvilleage.server.auth.util;

import com.cactusvilleage.server.auth.entities.RefreshToken;
import org.springframework.http.ResponseCookie;
import org.springframework.security.core.Authentication;
import org.springframework.util.SerializationUtils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Base64;
import java.util.Optional;

public interface CookieUtil {
    void generateAccessCookie(HttpServletRequest request, HttpServletResponse response, RefreshToken refreshToken);

    void generateTokenCookies(HttpServletRequest request, HttpServletResponse response, Authentication authentication);

    default Optional<Cookie> getCookie(HttpServletRequest request, String name) {
        Cookie[] cookies = request.getCookies();

        if (cookies != null && cookies.length > 0) {
            for (Cookie cookie : cookies) {
                if (name.equals(cookie.getName())) {
                    return Optional.of(cookie);
                }
            }
        }

        return Optional.empty();
    }

    default void addCookie(HttpServletRequest request, HttpServletResponse response, String name, String value, int maxAge, boolean httpOnly) {
        String host = request.getHeader("Host");
        String domain;

        //로컬 테스트 설정
        if (host.equals("localhost:8080")) {
            domain = "localhost";
        } else {
            domain = "cactus-villeage.com";
        }

        ResponseCookie cookie = ResponseCookie.from(name, value)
                .domain(domain)
//                .sameSite("None")
                .secure(false)
                .path("/")
                .httpOnly(httpOnly)
                .maxAge(maxAge)
                .build();

        response.addHeader("Set-Cookie", cookie.toString());
    }

    default void deleteCookie(HttpServletRequest request, HttpServletResponse response, String name) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null && cookies.length > 0) {
            for (Cookie cookie : cookies) {
                if (name.equals(cookie.getName())) {
                    cookie.setValue("");
                    cookie.setPath("/");
                    cookie.setMaxAge(0);
                    response.addCookie(cookie);
                }
            }
        }
    }

    default String serialize(Object obj) {
        return Base64.getUrlEncoder()
                .encodeToString(SerializationUtils.serialize(obj));
    }

    default <T> T deserialize(Cookie cookie, Class<T> cls) {
        return cls.cast(
                SerializationUtils.deserialize(
                        Base64.getUrlDecoder().decode(cookie.getValue())
                )
        );
    }

}
