package com.cactusvilleage.server.challenge.entities;

import com.cactusvilleage.server.global.audit.Auditable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class History extends Auditable {
//public class History {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "HISTORY_ID")
    private Long id;

    @Column(updatable = false)
    private String time; // 공부시간, 기상시간

    @Column(updatable = false, columnDefinition = "TEXT")
    private String contents; // 감사 일기 text, s3에 업로드된 Multipart/form-data 이미지 url

    @Builder
    public History(String time, String contents) {
        this.time = time;
        this.contents = contents;

    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CHALLENGE_ID")
    @JsonIgnore
    private Challenge challenge;

    public void setChallenge(Challenge challenge) {
        if (this.challenge != null) {
            this.challenge.getHistories().remove(this);
        }

        this.challenge = challenge;
        if (!challenge.getHistories().contains(this)) {
            challenge.addHistory(this);
        }
    }
}


