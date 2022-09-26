package com.cactusvilleage.server.auth.web.exception;

import com.cactusvilleage.server.global.response.ErrorResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

import static com.cactusvilleage.server.global.exception.ExceptionCode.ONLY_FOR_MEMBER;

@Component
@Slf4j
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException e) throws IOException {
        log.info("AuthenticationException occurs", e);

        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");

        ObjectMapper mapper = new ObjectMapper();
        String content = mapper.writeValueAsString(ErrorResponse.of(ONLY_FOR_MEMBER));

        PrintWriter writer = response.getWriter();
        writer.write(content);
        writer.flush();
    }
}
