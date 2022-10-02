package com.cactusvilleage.server.challenge.validator;


import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.ElementType.PARAMETER;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Target({ PARAMETER, FIELD })
@Retention(RUNTIME)
@Constraint(validatedBy = ChallengeTypeValidator.class)
@Documented
public @interface ValidatedChallengeType {

    String message() default "챌린지 타입은 'study', 'thanks', 'morning' 만 지정 가능합니다";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

}
