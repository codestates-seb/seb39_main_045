package com.cactusvilleage.server.global.infra.email.impl;

import com.cactusvilleage.server.global.exception.BusinessLogicException;
import com.cactusvilleage.server.global.exception.ExceptionCode;
import com.cactusvilleage.server.global.infra.email.EmailSender;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;
import software.amazon.awssdk.services.ses.SesAsyncClient;
import software.amazon.awssdk.services.ses.model.*;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import static com.cactusvilleage.server.global.exception.ExceptionCode.*;

@Component
@RequiredArgsConstructor
public class AwsSesSender implements EmailSender {
    private final SesAsyncClient asyncClient;
    private final SpringTemplateEngine templateEngine;

    @Override
    public void singleEmailRequest(String to, String subject, String template, Context context) {
        String html = templateEngine.process(template, context);

        final SendEmailRequest.Builder sendEmailRequestBuilder = SendEmailRequest.builder();
        sendEmailRequestBuilder.destination(Destination.builder().toAddresses(to).build());
        sendEmailRequestBuilder.message(getMessage(subject, html)).source("romchanxx@gmail.com").build();

        CompletableFuture<SendEmailResponse> completion = asyncClient.sendEmail(sendEmailRequestBuilder.build());
        try {
            SendEmailResponse sendEmailResponse = completion.get();
            checkSendResponse(sendEmailResponse);
        } catch (InterruptedException | ExecutionException e) {
            throw new BusinessLogicException(SEND_EMAIL_FAILED);
        }
    }

    private Message getMessage(String subject, String html) {
        Content content = Content.builder().data(subject).build();
        return Message.builder()
                .subject(content)
                .body(Body.builder().html(builder -> builder.data(html)).build())
                .build();
    }

    private void checkSendResponse(final SendEmailResponse response) {
        boolean success = response.sdkHttpResponse().isSuccessful();
        if (!success) {
            throw new BusinessLogicException(SEND_EMAIL_FAILED);
        }
    }

}
