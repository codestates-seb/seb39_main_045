package com.cactusvilleage.server.challenge.entities;

import com.cactusvilleage.server.global.audit.Auditable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

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

    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID uuid;

    @Column(updatable = false, columnDefinition = "TEXT")
    private String contents;

    @Column(updatable = false)
    private String time; // 공부시간, 기상시간

    // Todo Add image column

    @Builder
    public History(UUID uuid, String contents, String time, Challenge challenge) {
        this.uuid = uuid;
        this.contents = contents;
        this.time = time;
        this.challenge = challenge;
    } // 미완성

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

