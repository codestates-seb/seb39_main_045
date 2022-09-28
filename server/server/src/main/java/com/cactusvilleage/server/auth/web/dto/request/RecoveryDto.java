package com.cactusvilleage.server.auth.web.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public class RecoveryDto {
    @Email
    @NotBlank
    private String email;

    private String username;
}
