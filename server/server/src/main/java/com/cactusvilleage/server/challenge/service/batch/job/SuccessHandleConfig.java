package com.cactusvilleage.server.challenge.service.batch.job;

import com.cactusvilleage.server.challenge.entities.Challenge;
import com.cactusvilleage.server.challenge.repository.ChallengeRepository;
import com.cactusvilleage.server.challenge.service.batch.job.listener.JobLoggerListener;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.JobScope;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.batch.item.data.RepositoryItemReader;
import org.springframework.batch.item.data.RepositoryItemWriter;
import org.springframework.batch.item.data.builder.RepositoryItemWriterBuilder;
import org.springframework.batch.item.database.JpaPagingItemReader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.Sort;

import javax.persistence.EntityManagerFactory;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Random;

import static com.cactusvilleage.server.challenge.entities.Status.*;

@Slf4j
@RequiredArgsConstructor
@Configuration
public class SuccessHandleConfig {
    private final JobBuilderFactory jobBuilderFactory;
    private final StepBuilderFactory stepBuilderFactory;
    private final ChallengeRepository challengeRepository;
    private final EntityManagerFactory entityManagerFactory;
    private static final int CHUNK_SIZE = 1;


    @Bean
    public Job successHandleJob(Step successHandleStep) {
        return jobBuilderFactory.get("successHandleJob")
                .listener(new JobLoggerListener())
//                .preventRestart()
                .incrementer(new RunIdIncrementer())
                .start(successHandleStep)
                .build();
    }

    @JobScope
    @Bean
    public Step successHandleStep(ItemReader<Challenge> challengeReader, ItemProcessor<Challenge, Challenge> challengeProcessor, ItemWriter<Challenge> challengeWriter) {
        log.info("스텝 시작");
        return stepBuilderFactory.get("successHandleStep")
                .<Challenge, Challenge>chunk(CHUNK_SIZE)
                .reader(challengeReader)
                .processor(challengeProcessor)
                .writer(challengeWriter)
                .build();
    }

    @StepScope
    @Bean
    public JpaPagingItemReader<Challenge> challengeReader() {
        CustomItemReader<Challenge> reader = new CustomItemReader<>();

        reader.setName("challengeReader");
        reader.setEntityManagerFactory(entityManagerFactory);
        reader.setPageSize(CHUNK_SIZE);
        reader.setQueryString("select c from Challenge c where c.status = :status");
        reader.setParameterValues(Map.of("status", IN_PROGRESS));

        return reader;

//        return new RepositoryItemReaderBuilder<Challenge>()
//                .name("challengeReader")
//                .repository(challengeRepository)
//                .sorts(Collections.singletonMap("id", Sort.Direction.DESC))
//                .methodName("findAllByStatus")
//                .arguments(IN_PROGRESS)
//                .pageSize(1)
//                .build();
    }

    private static class CustomItemReader<Challenge> extends JpaPagingItemReader<Challenge> {
        @Override
        public int getPage() {
            return 0;
        }
    }


    @StepScope
    @Bean
    public ItemProcessor<Challenge, Challenge> challengeProcessor() {
        return challenge -> {
//            boolean due = challenge.getCreatedAt().toLocalDate().plusDays(challenge.getTargetDate()).isEqual(LocalDate.now());

            boolean due = true;

//            if (!due) {
            if (!due) {
                return null;
            } else {
                log.info("여기까지 들어옴?");
//                boolean success = challenge.getHistories().size() == challenge.getTargetDate();
                boolean success = challenge.isBatch();
                if (success) {
                    challenge.setStatus(SUCCESS);
                    challenge.setStamp(new Random().nextInt(8) + 1);
                } else {
                    challenge.setStatus(FAIL);
                }
                return challenge;
            }
        };
    }

    @StepScope
    @Bean
    public RepositoryItemWriter<Challenge> challengeWriter() {
        return new RepositoryItemWriterBuilder<Challenge>()
                .repository(challengeRepository)
                .build();
    }

}
