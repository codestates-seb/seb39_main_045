package com.cactusvilleage.server.challenge.validator.impl;

import com.cactusvilleage.server.challenge.validator.ChallengeStatus;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ChallengeStatusValidator implements ConstraintValidator<ChallengeStatus, String> {
    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null) {
            return true;
        }
        return value.equals("true");
    }
}
