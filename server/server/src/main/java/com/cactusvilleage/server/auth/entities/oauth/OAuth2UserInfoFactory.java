package com.cactusvilleage.server.auth.entities.oauth;

import com.cactusvilleage.server.auth.entities.oauth.impl.GoogleOAuth2UserInfo;
import com.cactusvilleage.server.auth.entities.oauth.impl.KakaoOAuth2UserInfo;
import com.cactusvilleage.server.global.exception.BusinessLogicException;

import java.util.Map;

import static com.cactusvilleage.server.global.exception.ExceptionCode.*;

public class OAuth2UserInfoFactory {
    public static OAuth2UserInfo getOAuth2UserInfo(ProviderType providerType, Map<String, Object> attributes) {
        switch (providerType) {
            case KAKAO:
                return new KakaoOAuth2UserInfo(attributes);
            case GOOGLE:
                return new GoogleOAuth2UserInfo(attributes);
            default:
                throw new BusinessLogicException(NOT_SUPPORTED_PROVIDER);
        }
    }
}
