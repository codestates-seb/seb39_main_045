package com.cactusvilleage.server.auth.web.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.lang.Nullable;

import javax.validation.constraints.Size;

@Getter
@AllArgsConstructor
public class EditDto {
    @Nullable
    @Size(min = 2, max = 8)
    private String username;
    @Nullable
    private String prePassword;
    @Nullable
    @Size(min = 8, max = 20)
    private String newPassword;
}