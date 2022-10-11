package com.cactusvilleage.server.auth.web.dto.request;

import com.cactusvilleage.server.auth.validator.EmailForm;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class PlainLoginDto {
    @EmailForm
    private String email;

    @NotBlank
    @Size(min = 8, max = 20, message = "비밀번호 값은 최소 8자에서 최대 20자 이하입니다.")
    private String password;
}
