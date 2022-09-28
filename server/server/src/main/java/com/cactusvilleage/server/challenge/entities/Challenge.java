package com.cactusvilleage.server.challenge.entities;

import com.cactusvilleage.server.auth.entities.Member;
import com.cactusvilleage.server.global.audit.Auditable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class Challenge extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CHALLENGE_ID")
    private Long id;

    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID uuid;

    @Enumerated(EnumType.STRING)
    private ChallengeType challengeType;

    @Column(updatable = false)
    private int targetDate;

    @Column
    private int stamp;

    @Column(columnDefinition = "TINYINT", length = 1)
    private boolean active;

    @Column(columnDefinition = "TINYINT", length = 1)
    private boolean deleted;

    @Builder
    public Challenge(UUID uuid, ChallengeType challengeType, int targetDate, int stamp) {
        this.uuid = uuid;
        this.challengeType = challengeType;
        this.targetDate = targetDate;
        this.stamp = stamp;
    }

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    @JsonIgnore // 리스폰스 무시
    private Member member;

    @JsonManagedReference // json 출력 시, 순환참조 방지
    @OneToMany(mappedBy = "challenge")
    private List<History> histories = new ArrayList<>();

    public void setMember(Member member) {
        if (this.member != null) {  // 기존 Member와 연관관계가 있다면 Member에서 해당 Challenge 삭제
            this.member.getChallenges().remove(this);

        }
        this.member = member;
        if (!member.getChallenges().contains(this)) { // 무한 루프 방지
            member.addChallenge(this);

        }
    }

    public void addHistory(History history) {
        this.histories.add(history);

        if (history.getChallenge() != this) {  // 무한 루프 방지
            history.setChallenge(this);
        }
    }

    public enum ChallengeType {
        MORNING, THANKS, STUDY
    }
}
