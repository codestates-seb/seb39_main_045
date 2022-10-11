package com.cactusvilleage.server.auth.validator;

import com.cactusvilleage.server.auth.validator.impl.UsernameSpaceValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UsernameSpaceValidator.class)
public @interface SpaceCantBeAtBeginOrEnd {
    String message() default "닉네임 앞뒤로는 공백이 들어갈 수 없습니다.";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
