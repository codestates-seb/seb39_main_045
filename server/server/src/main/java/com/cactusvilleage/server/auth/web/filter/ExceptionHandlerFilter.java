package com.cactusvilleage.server.auth.web.filter;

import com.cactusvilleage.server.global.exception.BusinessLogicException;
import com.cactusvilleage.server.global.response.ErrorResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

import static com.cactusvilleage.server.global.exception.ExceptionCode.ONLY_FOR_ADMIN;
import static com.cactusvilleage.server.global.exception.ExceptionCode.ONLY_FOR_MEMBER;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

@Slf4j
@Component
public class ExceptionHandlerFilter extends OncePerRequestFilter {
    private static final ObjectMapper mapper = new ObjectMapper();

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws IOException {

        String content;

        try {
            filterChain.doFilter(request, response);
        } catch (Exception e) {
            if (e instanceof BusinessLogicException) {
                log.info("BusinessLogicException 발생!", e);
                BusinessLogicException be = (BusinessLogicException) e;
                response.setStatus(be.getExceptionCode().getStatus());
                content = mapper.writeValueAsString(ErrorResponse.of(be.getExceptionCode()));
            } else if(e instanceof AccessDeniedException) {
                log.info("AccessDeniedException 발생!", e);
                content = mapper.writeValueAsString(ErrorResponse.of(ONLY_FOR_ADMIN));
            } else if (e instanceof AuthenticationException) {
                log.info("AuthenticationException 발생!", e);
                content = mapper.writeValueAsString(ErrorResponse.of(ONLY_FOR_MEMBER));
            } else {
                log.error("exception 발생!", e);
                content = mapper.writeValueAsString(ErrorResponse.of(INTERNAL_SERVER_ERROR, e.getMessage()));
            }

            setContent(content, response);
        }
    }

    private static void setContent(String content, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");
        PrintWriter writer = response.getWriter();

        writer.write(content);
    }
}
