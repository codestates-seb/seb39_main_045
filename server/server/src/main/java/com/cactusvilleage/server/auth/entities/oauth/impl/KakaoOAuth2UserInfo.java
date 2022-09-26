package com.cactusvilleage.server.auth.entities.oauth.impl;

import com.cactusvilleage.server.auth.entities.oauth.OAuth2UserInfo;

import java.util.Map;

public class KakaoOAuth2UserInfo extends OAuth2UserInfo {
    public KakaoOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
    }

    @Override
    public String getId() {
        return attributes.get("id").toString();
    }

    @Override
    public String getName() {
        Map<String, Object> properties = (Map<String, Object>) attributes.get("properties");
        if (properties == null) {
            return null;
        }
        return properties.get("nickname").toString();
    }

    @Override
    public String getEmail() {
        Map<String, Object> properties = (Map<String, Object>) attributes.get("kakao_account");
        if (properties == null || properties.get("email") == null) {
            return null;
        }
        return properties.get("email").toString();
    }

}
