package com.cactusvilleage.server.auth.validator;

import com.cactusvilleage.server.auth.validator.impl.PrePasswordValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = PrePasswordValidator.class)
public @interface PrePasswordRequired {
    String message() default "기존 비밀번호는 필수 값입니다.";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
