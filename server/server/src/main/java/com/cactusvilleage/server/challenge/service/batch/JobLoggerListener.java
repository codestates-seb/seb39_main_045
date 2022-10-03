package com.cactusvilleage.server.challenge.service.batch;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobExecutionListener;

@Slf4j
@RequiredArgsConstructor
public class JobLoggerListener implements JobExecutionListener {
    private final DiscordWebHookService discordWebHookService;
    private static final String BEFORE_LOG = "Batch Job[{}] 이 시작됩니다.";
    private static final String AFTER_LOG = "Batch Job[{}]이 끝났습니다. (Status: {})";
    private static final String BEFORE_DISCORD = "[%s] 배치 작업이 시작되었어요!";
    private static final String FAIL_DISCORD = "!!!!!! [%s] 배치 작업이 실패했어요!";
    private static final String AFTER_DISCORD = "[%s] 배치 작업이 완료됐어요! (status = %s)";


    @Override
    public void beforeJob(JobExecution jobExecution) {
        String jobName = jobExecution.getJobInstance().getJobName();
        log.info(BEFORE_LOG, jobName);
        discordWebHookService.callEvent(String.format(BEFORE_DISCORD, jobName));
    }

    @Override
    public void afterJob(JobExecution jobExecution) {
        String jobName = jobExecution.getJobInstance().getJobName();
        BatchStatus status = jobExecution.getStatus();

        log.info(AFTER_LOG, jobName, status);

        if (jobExecution.getStatus() == BatchStatus.FAILED) {
            log.warn("잡이 실패했슈");
            discordWebHookService.callEvent(String.format(FAIL_DISCORD, jobName));
        } else {
            discordWebHookService.callEvent(String.format(AFTER_DISCORD, jobName, status));
        }
    }
}
