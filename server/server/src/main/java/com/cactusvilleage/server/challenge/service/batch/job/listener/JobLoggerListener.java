package com.cactusvilleage.server.challenge.service.batch.job.listener;

import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobExecutionListener;

@Slf4j
public class JobLoggerListener implements JobExecutionListener {
    private static final String BEFORE_MESSAGE = "{} 잡이 시작한다구~~~";
    private static final String AFTER_MESSAGE = "{} 잡이 끝났다구~~~~ (Status: {})";


    @Override
    public void beforeJob(JobExecution jobExecution) {
        log.info(BEFORE_MESSAGE, jobExecution.getJobInstance().getJobName());
    }

    @Override
    public void afterJob(JobExecution jobExecution) {
        log.info(AFTER_MESSAGE, jobExecution.getJobInstance().getJobName(), jobExecution.getStatus());

        if (jobExecution.getStatus() == BatchStatus.FAILED) {
            //디코로 보내야지~!
            log.info("잡이 실패했슈");
        }
    }

}
