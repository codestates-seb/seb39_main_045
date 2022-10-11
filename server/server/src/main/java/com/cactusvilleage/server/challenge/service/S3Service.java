package com.cactusvilleage.server.challenge.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import com.amazonaws.util.IOUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.UUID;

@RequiredArgsConstructor
@Service
@Slf4j
public class S3Service {

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
        log.info("[CREATED] created objectMetadata ContentLength is {}", objectMetadata);

        // S3에 jpg, png 형식이 올라갈 때 url 다운로드가 되는데 contentType 설정해서 multipartfile.jpg 같은 것으로 설정, 다운말고 조회 가능
        objectMetadata.setContentType(multipartFile.getContentType());
        log.info("[CREATED] created objectMetadata ContentType is {}", objectMetadata);

        // s3 업로드
        amazonS3.putObject(bucket, s3FileName, multipartFile.getInputStream(), objectMetadata);
        log.debug("[CREATED] created amazonS3 system is {}", amazonS3);

        return s3FileName;
    }

    public ResponseEntity<byte[]> download(String storedFileName) throws IOException {

        // S3Object 선언 후 s3 버킷, 파일 이름을 전달하고 매칭되면 object 반환 -> 할당
        S3Object object = amazonS3.getObject(bucket, storedFileName);

        // InputStream 생성, 앞서 만든 object에서 getObjectContent()를 호출해 할당
        S3ObjectInputStream objectInputStream = object.getObjectContent();

        byte[] bytes = IOUtils.toByteArray(objectInputStream);

        String fileName = URLEncoder.encode(storedFileName, StandardCharsets.UTF_8).replaceAll("\\+", "%20");

        HttpHeaders httpHeaders = new HttpHeaders();

        httpHeaders.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        httpHeaders.setContentLength(bytes.length);
        httpHeaders.setContentDispositionFormData("attachment", fileName);

        return new ResponseEntity<>(bytes, httpHeaders, HttpStatus.OK);

    }
}
