package com.cactusvilleage.server.global.healthCheck;

import org.springframework.web.bind.annotation.*;

@RestController
public class HealthCheckController {
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String healthCheck() {
        return "No Security HealthCheck Get Request";
    }
}
