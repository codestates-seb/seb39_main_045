package com.cactusvilleage.server.auth.web.dto.plain.request;

import com.cactusvilleage.server.auth.entities.Member;
import com.cactusvilleage.server.auth.validator.EmailNotDuplicate;
import com.cactusvilleage.server.auth.validator.UsernameNotDuplicate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import static com.cactusvilleage.server.auth.entities.Authority.ROLE_USER;
import static com.cactusvilleage.server.auth.entities.oauth.ProviderType.*;

@Getter
@AllArgsConstructor
@ToString
public class PlainSignupDto {
    @Email
    @NotBlank
    @EmailNotDuplicate
    private String email;

    @Size(min = 2, max = 8)
    @NotBlank
    @UsernameNotDuplicate
    private String username;

    @Size(min = 8, max = 20)
    @NotBlank
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