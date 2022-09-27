package com.cactusvilleage.server.auth.web.exception;

import com.cactusvilleage.server.global.response.ErrorResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

import static com.cactusvilleage.server.global.exception.ExceptionCode.ONLY_FOR_ADMIN;

@Component
@Slf4j
public class JwtAccessDeniedHandler implements AccessDeniedHandler {
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException e) throws IOException, ServletException {
        log.info("AccessDeniedException occurs", e);

        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");

        ObjectMapper mapper = new ObjectMapper();
        String content = mapper.writeValueAsString(ErrorResponse.of(ONLY_FOR_ADMIN));

        PrintWriter writer = response.getWriter();
        writer.write(content);
        writer.flush();
    }
}
