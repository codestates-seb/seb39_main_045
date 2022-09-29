package com.cactusvilleage.server.challenge.entities;

import com.cactusvilleage.server.global.audit.Auditable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class History extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "HISTORY_ID")
    private Long id;

    @Column(columnDefinition = "BINARY(16)")
    private UUID uuid = UUID.randomUUID();

    @Column(updatable = false)
    private String time; // 공부시간, 기상시간

    @Column(updatable = false, columnDefinition = "TEXT")
    private String contents; // 감사 일기 text, Multipart/form-data로 온 text

    @Column
    private String imagePath; // Multipart/form-data로 온 image -> S3 image 저장 -> 해당 경로

    @Column
    private int progress; // 챌린지 진행도

    @Builder
    public History(String contents, String time, String imagePath, int progress) {
        this.time = time;
        this.contents = contents;
        this.imagePath = imagePath;
        this.progress = progress;
    }

    @ManyToOne
    @JoinColumn(name = "CHALLENGE_ID")
    @JsonIgnore
    private Challenge challenge;

    public void setChallenge(Challenge challenge) {
        if (this.challenge != null) {
            this.challenge.getHistories().remove(this);

            this.challenge = challenge;
            if (!challenge.getHistories().contains(this)) {
                challenge.addHistory(this);

            }
        }
    }

}

