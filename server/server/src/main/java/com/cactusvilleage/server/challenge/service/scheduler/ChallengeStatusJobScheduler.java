package com.cactusvilleage.server.challenge.service.scheduler;

import com.cactusvilleage.server.challenge.service.batch.ChallengeStatusJob;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.JobParameter;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersInvalidException;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@Configuration
public class ChallengeStatusJobScheduler {
    private final JobLauncher jobLauncher;
    private final ChallengeStatusJob challengeStatusJob;

//    @Scheduled(cron = "0 0 0 * * *")
    @Scheduled(cron = "0 0/5 * * * ?")
    public void challengeStatusJobSchedule() {
        Map<String, JobParameter> jobParameterMap = new HashMap<>();
        jobParameterMap.put("time", new JobParameter(System.currentTimeMillis()));
        JobParameters parameters = new JobParameters(jobParameterMap);

        try {
            jobLauncher.run(challengeStatusJob.challengeStatusJobJob(), parameters);
        } catch (JobExecutionAlreadyRunningException | JobRestartException | JobInstanceAlreadyCompleteException |
                 JobParametersInvalidException e) {
            log.info("스케줄링에서 먼가 터졌습니다", e);
            e.printStackTrace();
        }
    }

}

