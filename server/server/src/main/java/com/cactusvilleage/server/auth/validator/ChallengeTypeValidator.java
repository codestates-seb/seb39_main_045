package com.cactusvilleage.server.auth.validator;


import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ChallengeTypeValidator implements ConstraintValidator<InvalidChallengeType, String> {

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {

        switch (value) {
            case "morning":
            case "thanks":
            case "study":
                return true;
            default:
                return false;
        }

    }
}
