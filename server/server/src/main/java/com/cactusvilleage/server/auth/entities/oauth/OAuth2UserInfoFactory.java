package com.cactusvilleage.server.auth.entities.oauth;

import com.cactusvilleage.server.auth.entities.oauth.impl.GoogleOAuth2UserInfo;
import com.cactusvilleage.server.auth.entities.oauth.impl.KakaoOAuth2UserInfo;

import java.util.Map;

public class OAuth2UserInfoFactory {
    public static OAuth2UserInfo getOAuth2UserInfo(ProviderType providerType, Map<String, Object> attributes) {
        switch (providerType) {
            case KAKAO:
                return new KakaoOAuth2UserInfo(attributes);
            case GOOGLE:
                return new GoogleOAuth2UserInfo(attributes);
            default:
                throw new IllegalStateException("해당하는 provider type을 찾을 수 없습니다");
        }
    }
}
