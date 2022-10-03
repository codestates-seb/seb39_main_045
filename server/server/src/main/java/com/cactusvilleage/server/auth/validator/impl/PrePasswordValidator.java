package com.cactusvilleage.server.auth.validator.impl;

import com.cactusvilleage.server.auth.entities.Member;
import com.cactusvilleage.server.auth.entities.oauth.ProviderType;
import com.cactusvilleage.server.auth.repository.MemberRepository;
import com.cactusvilleage.server.auth.util.SecurityUtil;
import com.cactusvilleage.server.auth.validator.PrePasswordRequired;
import com.cactusvilleage.server.global.exception.BusinessLogicException;
import lombok.RequiredArgsConstructor;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import static com.cactusvilleage.server.auth.entities.oauth.ProviderType.*;
import static com.cactusvilleage.server.global.exception.ExceptionCode.MEMBER_NOT_FOUND;

@RequiredArgsConstructor
public class PrePasswordValidator implements ConstraintValidator<PrePasswordRequired, String> {
    private final MemberRepository memberRepository;

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        Member member = memberRepository.findById(SecurityUtil.getCurrentMemberId())
                .orElseThrow(() -> new BusinessLogicException(MEMBER_NOT_FOUND));
        ProviderType providerType = member.getProviderType();
        return (value != null && providerType.equals(CACTUS) && !value.isEmpty())
                || (providerType.equals(KAKAO) && value != null)
                || (providerType.equals(GOOGLE) && value != null);
    }
}
