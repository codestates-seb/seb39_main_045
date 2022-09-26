package com.cactusvilleage.server.auth.util;

import com.cactusvilleage.server.global.exception.BusinessLogicException;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import static com.cactusvilleage.server.global.exception.ExceptionCode.*;

/**
 * 최초 로그인 -> 액세스, 리프레시 동시 발급
 * 토큰 재발급 -> 검증 후 액세스만 발급
 * <p>
 * 리프레시는 재발급 ㄴㄴ?
 */
@Component
@Slf4j
public class TokenProvider {
    private static final String AUTHORITIES_KEY = "auth";
    private static final int ACCESS_TOKEN_EXPIRE_TIME = 1000 * 60 * 30; // 30분
//    private static final int ACCESS_TOKEN_EXPIRE_TIME = 1000 * 30;
    private static final int REFRESH_TOKEN_EXPIRE_TIME = 1000 * 60 * 60 * 24; // 2주
    private final Key key;

    public TokenProvider(@Value("${jwt.secret}") String secretKey) {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    public String generateRefreshToken() {
        Date now = new Date();
        Date refreshTokenExpiresIn = new Date(now.getTime() + REFRESH_TOKEN_EXPIRE_TIME);

        return Jwts.builder()
                .setIssuedAt(now)
                .setExpiration(refreshTokenExpiresIn)
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
    }

    public String generateAccessToken(Authentication authentication) {
        Date now = new Date();
        Date accessTokenExpiresIn = new Date(now.getTime() + ACCESS_TOKEN_EXPIRE_TIME);

        String auth = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));

        return Jwts.builder()
                .claim(AUTHORITIES_KEY, auth)
                .setSubject(authentication.getName())
                .setIssuedAt(now)
                .setExpiration(accessTokenExpiresIn)
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
    }

    public Authentication getAuthentication(String accessToken) {
        Claims claims = parseClaim(accessToken);

        if (claims.get(AUTHORITIES_KEY) == null) {
            throw new BusinessLogicException(TOKEN_HAS_NO_AUTH);
        }

        List<SimpleGrantedAuthority> authorities = Arrays
                .stream(claims.get(AUTHORITIES_KEY).toString().split(","))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());

        UserDetails principal = new User(claims.getSubject(), "", authorities);
        return new UsernamePasswordAuthenticationToken(principal, "", authorities);
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException exception) {
            throw new BusinessLogicException(WRONG_JWT_SIGNATURE);
        } catch (ExpiredJwtException e) {
            throw new BusinessLogicException(EXPIRED_JWT_TOKEN);
        } catch (UnsupportedJwtException e) {
            throw new BusinessLogicException(UNSUPPORTED_JWT_TOKEN);
        } catch (IllegalStateException e) {
            throw new BusinessLogicException(WRONG_JWT_ARGUMENT);
        }
    }

    private Claims parseClaim(String accessToken) {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(accessToken)
                    .getBody();
        } catch (ExpiredJwtException e) {
            return e.getClaims();
        }
    }
}
