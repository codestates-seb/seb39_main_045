package com.cactusvilleage.server.auth.web.dto.request;

import com.cactusvilleage.server.auth.validator.PrePasswordRequired;
import com.cactusvilleage.server.auth.validator.UsernameNotDuplicate;
import lombok.AccessLevel;
import com.cactusvilleage.server.auth.validator.SpaceCantBeAtBeginOrEnd;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class EditDto {
    @NotEmpty(message = "변경 닉네임은 필수로 입력되어야 합니다.")
    @SpaceCantBeAtBeginOrEnd
    @UsernameNotDuplicate
    @Size(min = 2, max = 8, message = "닉네임 길이는 2 이상 8 이하여야 합니다.")
    private String username;
    @PrePasswordRequired
    @Size(min = 8, max = 20, message = "비밀번호 값은 최소 8자에서 최대 20자 이하입니다.")
    private String prePassword;
    @Nullable
    @Size(min = 8, max = 20, message = "비밀번호 값은 최소 8자에서 최대 20자 이하입니다.")
    private String newPassword;
}
