package com.cactusvilleage.server.auth.email;

import org.springframework.stereotype.Component;
import org.thymeleaf.context.Context;

@Component
public interface EmailSender {
    void singleEmailRequest(String to, String subject, String template, Context context);
}
