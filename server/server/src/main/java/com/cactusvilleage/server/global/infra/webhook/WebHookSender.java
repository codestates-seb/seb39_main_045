package com.cactusvilleage.server.global.infra.webhook;

public interface WebHookSender {
    void callEvent(String message);
}
