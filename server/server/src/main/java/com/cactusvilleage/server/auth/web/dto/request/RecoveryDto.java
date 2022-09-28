package com.cactusvilleage.server.auth.web.dto.request;

import com.cactusvilleage.server.auth.validator.EmailForm;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class RecoveryDto {
    @EmailForm
    private String email;

    private String username;
}
