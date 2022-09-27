package com.cactusvilleage.server.auth.web.filter;

import com.cactusvilleage.server.global.exception.BusinessLogicException;
import com.cactusvilleage.server.global.response.ErrorResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

import static com.cactusvilleage.server.global.exception.ExceptionCode.EXPIRED_JWT_TOKEN;

@Component
@Slf4j
public class JwtExceptionHandlerFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            filterChain.doFilter(request, response);
        } catch (BusinessLogicException e) {
            if (e.getExceptionCode().equals(EXPIRED_JWT_TOKEN) && request.getRequestURI().equals("/members/reissue")) {
                filterChain.doFilter(request, response);
            } else {
                sendErrorResponse(response, e);
            }
        }
    }

    private void sendErrorResponse(HttpServletResponse response, BusinessLogicException e) throws IOException {
        response.setStatus(e.getExceptionCode().getStatus());
        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");

        ObjectMapper mapper = new ObjectMapper();
        String content = mapper.writeValueAsString(ErrorResponse.of(e.getExceptionCode()));

        PrintWriter writer = response.getWriter();
        writer.write(content);
        writer.flush();
    }
}
