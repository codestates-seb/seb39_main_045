package com.cactusvilleage.server.auth.util.impl;

import com.cactusvilleage.server.auth.entities.RefreshToken;
import com.cactusvilleage.server.auth.repository.RefreshTokenRepository;
import com.cactusvilleage.server.auth.util.CookieUtil;
import com.cactusvilleage.server.auth.util.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RequiredArgsConstructor
public class JwtCookieUtil implements CookieUtil {
    private final TokenProvider tokenProvider;
    private final PasswordEncoder encoder;
    private final RefreshTokenRepository tokenRepository;
    private static final int REFRESH_TOKEN_EXPIRES_IN = 60 * 60 * 24 * 14;
    private static final int ACCESS_TOKEN_EXPIRES_IN = 60 * 30;

    @Override
    public void generateAccessCookie(HttpServletRequest request, HttpServletResponse response, RefreshToken refreshToken) {
        Authentication authentication = tokenProvider.getAuthentication(refreshToken.getTokenValue());
        String accessToken = tokenProvider.generateAccessToken(authentication);

        deleteCookie(request, response, "access_token");
        addCookie(response, "access_token", accessToken, ACCESS_TOKEN_EXPIRES_IN, false);
    }

    @Override
    public void generateTokenCookies(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
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
}
