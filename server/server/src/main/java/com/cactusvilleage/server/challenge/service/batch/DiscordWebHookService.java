package com.cactusvilleage.server.challenge.service.batch;

import lombok.extern.slf4j.Slf4j;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Slf4j
@Service
public class DiscordWebHookService {
    @Value("${discord.webhookURL}")
    private String url;

    public void callEvent(String message) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("content", message);
        } catch (JSONException e) {
            log.info("JSONException 발생!");
            e.printStackTrace();
        }
        send(jsonObject);
    }

    private void send(JSONObject jsonObject) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        RestTemplate restTemplate = new RestTemplate();
        HttpEntity<String> entity = new HttpEntity<>(jsonObject.toString(), headers);
        restTemplate.postForObject(url, entity, String.class);
    }

}
