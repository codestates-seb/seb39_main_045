package com.cactusvilleage.server.auth.web.dto.request;

import com.cactusvilleage.server.auth.entities.Member;
import com.cactusvilleage.server.auth.validator.EmailForm;
import com.cactusvilleage.server.auth.validator.EmailNotDuplicate;
import com.cactusvilleage.server.auth.validator.SpaceCantBeAtBeginOrEnd;
import com.cactusvilleage.server.auth.validator.UsernameNotDuplicate;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import static com.cactusvilleage.server.auth.entities.Authority.ROLE_USER;
import static com.cactusvilleage.server.auth.entities.oauth.ProviderType.CACTUS;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class PlainSignupDto {
    @EmailForm
    @EmailNotDuplicate
    private String email;

    @NotBlank
    @UsernameNotDuplicate
    @SpaceCantBeAtBeginOrEnd
    @Size(min = 2, max = 8, message = "닉네임 길이는 2 이상 8 이하여야 합니다.")
    private String username;

    @NotBlank
    @Size(min = 8, max = 20, message = "비밀번호 값은 최소 8자에서 최대 20자 이하입니다.")
    private String password;

    public Member toMember(PasswordEncoder passwordEncoder) {
        return Member.builder()
                .email(email)
                .username(username)
                .password(passwordEncoder.encode(password))
                .authority(ROLE_USER)
                .providerType(CACTUS)
                .build();
    }
}
