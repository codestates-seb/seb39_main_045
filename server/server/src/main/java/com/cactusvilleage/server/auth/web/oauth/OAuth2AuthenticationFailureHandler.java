package com.cactusvilleage.server.auth.web.oauth;

import com.cactusvilleage.server.auth.repository.OAuth2AuthorizationRequestRepository;
import com.cactusvilleage.server.auth.util.CookieUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static com.cactusvilleage.server.auth.repository.OAuth2AuthorizationRequestRepository.*;

@Component
@Slf4j
@RequiredArgsConstructor
public class OAuth2AuthenticationFailureHandler extends SimpleUrlAuthenticationFailureHandler {
    private final OAuth2AuthorizationRequestRepository authorizationRequestRepository;

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException e) throws IOException, ServletException {

        String targetUri = CookieUtil.getCookie(request, REDIRECT_URI_PARAM_COOKIE_NAME)
                .map(Cookie::getValue)
                .orElse("/");

        e.printStackTrace();

        targetUri = UriComponentsBuilder.fromUriString(targetUri)
                .queryParam("error", e.getLocalizedMessage())
                .build().toUriString();

        authorizationRequestRepository.removeAuthorizationRequest(request, response);

        getRedirectStrategy().sendRedirect(request, response, targetUri);
    }
}
