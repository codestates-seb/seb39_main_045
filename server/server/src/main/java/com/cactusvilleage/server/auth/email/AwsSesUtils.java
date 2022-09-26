package com.cactusvilleage.server.auth.email;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;
import software.amazon.awssdk.services.ses.SesAsyncClient;
import software.amazon.awssdk.services.ses.model.*;

@Component
@AllArgsConstructor
public class AwsSesUtils {
    private final SesAsyncClient asyncClient;
    private final SpringTemplateEngine templateEngine;

    public void singleEmailRequest(String to, String subject, String template, Context context) {
        String html = templateEngine.process(template, context);

        final SendEmailRequest.Builder sendEmailRequestBuilder = SendEmailRequest.builder();
        sendEmailRequestBuilder.destination(Destination.builder().toAddresses(to).build());
        sendEmailRequestBuilder.message(getMessage(subject, html)).source("romchanxx@gmail.com").build();

        asyncClient.sendEmail(sendEmailRequestBuilder.build());
    }

    private Message getMessage(String subject, String html) {
        Content content = Content.builder().data(subject).build();
        return Message.builder()
                .subject(content)
                .body(Body.builder().html(builder -> builder.data(html)).build())
                .build();
    }

}
