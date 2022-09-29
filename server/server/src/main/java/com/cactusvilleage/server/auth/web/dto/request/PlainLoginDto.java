package com.cactusvilleage.server.auth.web.dto.request;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class PlainLoginDto {
    @Email
    @NotBlank
    private String email;

    @Size(min = 8, max = 20)
    @NotBlank
    private String password;
}
