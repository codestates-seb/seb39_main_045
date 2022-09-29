package com.cactusvilleage.server.auth.web.dto.request;

import lombok.AccessLevel;
import com.cactusvilleage.server.auth.validator.EmailForm;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class RecoveryDto {
    @EmailForm
    private String email;

    private String username;
}
