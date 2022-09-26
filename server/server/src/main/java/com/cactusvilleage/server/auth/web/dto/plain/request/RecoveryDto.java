package com.cactusvilleage.server.auth.web.dto.plain.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@AllArgsConstructor
public class RecoveryDto {
    @Email
    @NotBlank
    private String email;

    @Size(min = 2, max = 8)
    private String username;
}
