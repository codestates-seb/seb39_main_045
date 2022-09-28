package com.cactusvilleage.server.challenge.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@RequiredArgsConstructor
@Service
@Slf4j
public class S3Upload {

    @Value("${aws.s3.bucket}")
    private String bucket;
    private final AmazonS3 amazonS3;

    public String upload(MultipartFile multipartFile) throws IOException {
        // S3에 저장되는 파일 이름 중복 방지 UUID 랜덤 값 + 파일 이름
        String s3FileName = UUID.randomUUID() + "-" + multipartFile.getOriginalFilename();
        log.info("[CREATED] created fileName is {}", s3FileName);

        // Spring Server 에서 S3 파일 업로드 할 때 파일 사이즈 ContentLength 로 S3에 전달하기 위해 ObjectMetadata 사용
        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentLength(multipartFile.getInputStream().available());
        log.info("[CREATED] created objectMetadata is {}", objectMetadata);

        // getUrl 메소드로 S3에 업로드된 이미지 Url 가져오는 방식 정의
        amazonS3.putObject(bucket, s3FileName, multipartFile.getInputStream(), objectMetadata);
        log.debug("[CREATED] created amazonS3 system is {}", amazonS3);

        return amazonS3.getUrl(bucket, s3FileName).toString();
    }
    //TODO upload 메소드 호출 될 때 log.debug("[CREATED] created amazonS3 get url ver. system is {}", amazonS3) 찍기
}
