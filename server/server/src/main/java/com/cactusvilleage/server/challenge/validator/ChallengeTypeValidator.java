package com.cactusvilleage.server.challenge.validator;


import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ChallengeTypeValidator implements ConstraintValidator<ValidatedChallengeType, String> {


    @Override
    public boolean isValid(String type, ConstraintValidatorContext context) {

        return type != null && (type.equals("study") || type.equals("thanks") || type.equals("morning"));
    }

}
