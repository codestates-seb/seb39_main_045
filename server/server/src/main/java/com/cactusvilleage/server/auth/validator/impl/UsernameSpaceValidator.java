package com.cactusvilleage.server.auth.validator.impl;

import com.cactusvilleage.server.auth.validator.SpaceCantBeAtBeginOrEnd;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class UsernameSpaceValidator implements ConstraintValidator<SpaceCantBeAtBeginOrEnd, String> {

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null) {
            return true;
        }
        return !value.startsWith(" ") && !value.endsWith(" ");
    }
}
