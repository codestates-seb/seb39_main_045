package com.cactusvilleage.server.auth.web.api;

import com.cactusvilleage.server.auth.service.MemberService;
import com.cactusvilleage.server.auth.web.dto.plain.request.PlainEditDto;
import com.cactusvilleage.server.auth.web.dto.plain.request.PlainLoginDto;
import com.cactusvilleage.server.auth.web.dto.plain.request.PlainSignupDto;
import com.cactusvilleage.server.auth.web.dto.plain.request.RecoveryDto;
import com.cactusvilleage.server.global.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@RequestMapping("/members")
//@Validated
@RequiredArgsConstructor
@Slf4j
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/signup")
    public ResponseEntity signup(@RequestBody @Valid PlainSignupDto signupDto) {
        memberService.signup(signupDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid PlainLoginDto loginDto, HttpServletRequest request, HttpServletResponse response) {
        return memberService.login(loginDto, request, response);
    }

    @PostMapping("/logout")
    public ResponseEntity logout(HttpServletRequest request, HttpServletResponse response) {
        memberService.logout(request, response);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PatchMapping
    public ResponseEntity edit(@RequestBody @Valid PlainEditDto editDto) {
        return memberService.edit(editDto);
    }

    @PostMapping("/recovery")
    public ResponseEntity recovery(@RequestBody @Valid RecoveryDto recoveryDto) {
        memberService.recovery(recoveryDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity delete(HttpServletRequest request, HttpServletResponse response) {
        memberService.delete(request, response);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/reissue")
    public ResponseEntity reissue(HttpServletRequest request) {
        return memberService.reissue(request);
    }

    @GetMapping("/me")
    public ResponseEntity me() {
        return memberService.memberInfo();
    }

}
