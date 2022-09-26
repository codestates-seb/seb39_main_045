package com.cactusvilleage.server.auth.entities;

import com.cactusvilleage.server.auth.entities.oauth.ProviderType;
import com.cactusvilleage.server.global.audit.Auditable;
import lombok.*;

import javax.persistence.*;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
@ToString
public class  Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_ID")
    private Long id;
    @Column(unique = true)
    private String email;
    private String password;
    @Column(unique = true)
    private String username;
    @Column(columnDefinition = "TINYINT", length = 1)
    private boolean deleted;

    @Enumerated(EnumType.STRING)
    private Authority authority;

    @Enumerated(EnumType.STRING)
    private ProviderType providerType;

    private String providerId;

    @Builder
    public Member(String email, String password, String username, Authority authority, ProviderType providerType, String providerId) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.authority = authority;
        this.providerType = providerType;
        this.providerId = providerId;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    public void deleteMember(String email, String username) {
        this.email = email;
        this.username = username;
    }

}

