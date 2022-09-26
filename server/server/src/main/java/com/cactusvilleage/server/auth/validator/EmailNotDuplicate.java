package com.cactusvilleage.server.auth.validator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = EmailValidator.class)
public @interface EmailNotDuplicate {
    String message() default "이미 가입된 정보가 있는 이메일입니다.";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
