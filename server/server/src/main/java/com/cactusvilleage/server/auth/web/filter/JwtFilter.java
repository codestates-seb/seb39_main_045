package com.cactusvilleage.server.auth.web.filter;

import com.cactusvilleage.server.auth.util.CookieUtil;
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
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import static com.cactusvilleage.server.global.exception.ExceptionCode.*;

@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {
    private final TokenProvider tokenProvider;
    private static final List<String> permitURIs = List.of(
            "/api/v1/members/signup",
            "/api/v1/members/login",
            "/api/v1/members/recovery",
            "/api/v1/members/reissue",
            "/api/v1/members/logout",
            "/login/oauth2/code/kakao",
            "/login/oauth2/code/google"
    );

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        if (checkPermitUri(request)) {
            filterChain.doFilter(request, response);
        } else if(!checkPermitUri(request)) {
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

    }

    private String resolveToken(HttpServletRequest request) {
        Optional<Cookie> accessCookie = CookieUtil.getCookie(request, "access_token");
        if (accessCookie.isEmpty()) {
            throw new BusinessLogicException(NO_AUTHENTICATION);
        } else {
            String accessToken = accessCookie.get().getValue();
            if (StringUtils.hasText(accessToken)) {
                return accessToken;
            }
        }
        return null;
    }

    private boolean checkPermitUri(HttpServletRequest request) {
        if (request.getRequestURI().equals("/members") && request.getMethod().equals("delete")) {
            return true;
        } else {
            return permitURIs.stream()
                    .anyMatch(uri -> uri.matches(request.getRequestURI()));
        }
    }
}
