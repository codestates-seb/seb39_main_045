package com.cactusvilleage.server.auth.util;

import com.cactusvilleage.server.auth.entities.RefreshToken;
import com.cactusvilleage.server.auth.repository.RefreshTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RequiredArgsConstructor
public class HeaderUtil {
    private final static String HEADER_AUTHORIZATION = "Authorization";
    private final static String TOKEN_PREFIX = "Bearer ";
    private final TokenProvider tokenProvider;
    private final PasswordEncoder encoder;
    private final RefreshTokenRepository tokenRepository;
    private static final int REFRESH_TOKEN_EXPIRES_IN = 60 * 60 * 24 * 14;

    public static String getAccessToken(HttpServletRequest request) {
        String accessToken = request.getHeader(HEADER_AUTHORIZATION);
        if (accessToken == null) {
            return null;
        }
        if (accessToken.startsWith(TOKEN_PREFIX)) {
            return accessToken.substring(TOKEN_PREFIX.length());
        }

        return null;
    }

    public void generateTokens(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        String accessToken = tokenProvider.generateAccessToken(authentication);
        response.addHeader("Authorization", "Bearer " + accessToken);

        String tokenId = encoder.encode(authentication.getName());
        RefreshToken refreshTokenEntity = RefreshToken.builder()
                .memberId(authentication.getName())
                .tokenId(tokenId)
                .tokenValue(tokenProvider.generateRefreshToken())
                .build();
        tokenRepository.save(refreshTokenEntity);

        CookieUtil.deleteCookie(request, response, "refresh_token");
        CookieUtil.addCookie(response, "refresh_token", tokenId, REFRESH_TOKEN_EXPIRES_IN);
    }



}
