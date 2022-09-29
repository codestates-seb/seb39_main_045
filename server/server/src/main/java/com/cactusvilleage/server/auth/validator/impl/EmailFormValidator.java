package com.cactusvilleage.server.auth.validator.impl;

import com.cactusvilleage.server.auth.validator.EmailForm;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class EmailFormValidator implements ConstraintValidator<EmailForm, String> {
    String regexPattern = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
            + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return value.matches(regexPattern);
    }
}
