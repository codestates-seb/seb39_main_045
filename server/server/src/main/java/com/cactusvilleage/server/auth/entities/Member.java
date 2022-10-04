package com.cactusvilleage.server.auth.entities;

import com.cactusvilleage.server.auth.entities.oauth.ProviderType;
import com.cactusvilleage.server.challenge.entities.Challenge;
import com.cactusvilleage.server.global.audit.Auditable;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member extends Auditable {
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

    @OneToMany(mappedBy = "member")
    private List<Challenge> challenges = new ArrayList<>();

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void deleteMember(String email, String username, boolean deleted) {
        this.email = email;
        this.username = username;
        this.deleted = deleted;
    }

    public void addChallenge(Challenge challenge) {
        this.challenges.add(challenge);

        if (challenge.getMember() != this) {
            challenge.setMember(this);
        }
    }
}

