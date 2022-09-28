package com.cactusvilleage.server.auth.util;

import com.cactusvilleage.server.auth.entities.RefreshToken;
import com.cactusvilleage.server.auth.repository.RefreshTokenRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.SerializationUtils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Base64;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
public class CookieUtil {
    private final TokenProvider tokenProvider;
    private final PasswordEncoder encoder;
    private final RefreshTokenRepository tokenRepository;
    private static final int REFRESH_TOKEN_EXPIRES_IN = 60 * 60 * 24 * 14;
    private static final int ACCESS_TOKEN_EXPIRES_IN = 60 * 30;


    public static Optional<Cookie> getCookie(HttpServletRequest request, String name) {
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

    public static void addCookie(HttpServletResponse response, String name, String value, int maxAge, boolean httpOnly) {
        Cookie cookie = new Cookie(name, value);
        cookie.setPath("/");
        cookie.setHttpOnly(httpOnly);
        cookie.setMaxAge(maxAge);
//        cookie.setDomain(".cactus-villeage.com");
//        cookie.setSecure(true);
        //samesite -> 쿠키 바꿔야 댐 ㅜㅜ

        response.addCookie(cookie);
    }

    public static void deleteCookie(HttpServletRequest request, HttpServletResponse response, String name) {
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

    public void generateTokens(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        String accessToken = tokenProvider.generateAccessToken(authentication);

        deleteCookie(request, response, "access_token");
        addCookie(response, "access_token", accessToken, ACCESS_TOKEN_EXPIRES_IN, false);

        String tokenId = encoder.encode(authentication.getName());
        RefreshToken refreshTokenEntity = RefreshToken.builder()
                .memberId(authentication.getName())
                .tokenId(tokenId)
                .tokenValue(tokenProvider.generateRefreshToken(authentication))
                .build();
        tokenRepository.save(refreshTokenEntity);

        deleteCookie(request, response, "refresh_token");
        addCookie(response, "refresh_token", tokenId, REFRESH_TOKEN_EXPIRES_IN, true);
    }

    public static String serialize(Object obj) {
        return Base64.getUrlEncoder()
                .encodeToString(SerializationUtils.serialize(obj));
    }

    public static <T> T deserialize(Cookie cookie, Class<T> cls) {
        return cls.cast(
                SerializationUtils.deserialize(
                        Base64.getUrlDecoder().decode(cookie.getValue())
                )
        );
    }

}
