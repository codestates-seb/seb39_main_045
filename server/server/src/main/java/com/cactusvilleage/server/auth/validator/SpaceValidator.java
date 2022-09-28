package com.cactusvilleage.server.auth.validator;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class SpaceValidator implements ConstraintValidator<SpaceCantBeAtBeginOrEnd, String> {

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return !value.startsWith(" ") && !value.endsWith(" ");
    }
}
