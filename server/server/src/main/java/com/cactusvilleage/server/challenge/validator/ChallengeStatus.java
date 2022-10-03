package com.cactusvilleage.server.challenge.validator;

import com.cactusvilleage.server.challenge.validator.impl.ChallengeStatusValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.PARAMETER;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Target(PARAMETER)
@Retention(RUNTIME)
@Constraint(validatedBy = ChallengeStatusValidator.class)
@Documented
public @interface ChallengeStatus {
    String message() default "유효한 파라미터 값이 아닙니다.";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
