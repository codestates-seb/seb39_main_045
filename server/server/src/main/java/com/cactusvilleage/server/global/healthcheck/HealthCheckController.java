package com.cactusvilleage.server.global.healthcheck;

import org.springframework.web.bind.annotation.*;

@RestController
public class HealthCheckController {
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String healthCheck() {
        return "HealthCheck ! give me status 200";
    }
}
