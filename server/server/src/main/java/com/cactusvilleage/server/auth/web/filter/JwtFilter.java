package com.cactusvilleage.server.auth.web.filter;

import com.cactusvilleage.server.auth.util.TokenProvider;
import com.cactusvilleage.server.global.exception.BusinessLogicException;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static com.cactusvilleage.server.global.exception.ExceptionCode.*;

@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {
    private static final String AUTHORIZATION_HEADER = "Authorization";
    private static final String BEARER_PREFIX = "Bearer ";
    private final TokenProvider tokenProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String accessToken = resolveToken(request);

        try {
            if (StringUtils.hasText(accessToken) && tokenProvider.validateToken(accessToken)) {
                Authentication authentication = tokenProvider.getAuthentication(accessToken);
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException exception) {
            throw new BusinessLogicException(WRONG_JWT_SIGNATURE);
        } catch (ExpiredJwtException e) {
            throw new BusinessLogicException(EXPIRED_JWT_TOKEN);
        } catch (UnsupportedJwtException e) {
            throw new BusinessLogicException(UNSUPPORTED_JWT_TOKEN);
        } catch (IllegalStateException e) {
            throw new BusinessLogicException(WRONG_JWT_ARGUMENT);
        }
        filterChain.doFilter(request, response);
    }
    private String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith(BEARER_PREFIX)) {
            return bearerToken.substring(7);
        }
        return null;
    }
}
