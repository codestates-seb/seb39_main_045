package com.cactusvilleage.server.auth.web.dto.request;

import lombok.AccessLevel;
import com.cactusvilleage.server.auth.validator.SpaceCantBeAtBeginOrEnd;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import javax.validation.constraints.Size;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class EditDto {
    @Nullable
    @SpaceCantBeAtBeginOrEnd
    private String username;
    @Nullable
    private String prePassword;
    @Nullable
    @Size(min = 8, max = 20)
    private String newPassword;
}
