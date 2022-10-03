package com.cactusvilleage.server.challenge.entities;

import com.cactusvilleage.server.auth.entities.Member;
import com.cactusvilleage.server.global.audit.Auditable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Challenge extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CHALLENGE_ID")
    private Long id;

    @Column(columnDefinition = "BINARY(16)")
    private UUID uuid = UUID.randomUUID();

    @Enumerated(EnumType.STRING)
    private ChallengeType challengeType;

    @Column(updatable = false)
    private Integer targetDate;

    @Column(updatable = false)
    private Integer targetTime;

    @Column
    private int stamp;

    @Column(columnDefinition = "TINYINT", length = 1)
    private boolean notified;

    @Enumerated(EnumType.STRING)
    private Status status;

    @Builder
    public Challenge(ChallengeType challengeType, Integer targetDate, Integer targetTime) {
        this.challengeType = challengeType;
        this.targetDate = targetDate;
        this.targetTime = targetTime;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    @JsonIgnore // 리스폰스 무시
    private Member member;

    @JsonManagedReference // json 출력 시, 순환참조 방지
    @OneToMany(mappedBy = "challenge")
    private List<History> histories = new ArrayList<>();

    public void setStamp(int stamp) {
        this.stamp = stamp;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public void setNotified(boolean notified) {
        this.notified = notified;
    }

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
