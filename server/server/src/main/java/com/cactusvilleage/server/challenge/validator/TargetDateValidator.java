package com.cactusvilleage.server.challenge.validator;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class TargetDateValidator implements ConstraintValidator<ValidatedTargetDate, Integer> {


    @Override
    public boolean isValid(Integer value, ConstraintValidatorContext context) {

        return value != null && (value == 3 || value == 5 || value == 7);
        }
    }


