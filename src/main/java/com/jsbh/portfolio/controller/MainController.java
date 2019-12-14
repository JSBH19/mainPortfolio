package com.jsbh.portfolio.controller;

import com.jsbh.portfolio.service.TestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * MainController
 */
@Controller
public class MainController {

    @Autowired TestService testService;

    @RequestMapping("/")
    public String goingToMain() {
        return "index";
    }

    @RequestMapping("/test")
    public String test() {
        int count = testService.countAllData();
        System.out.println("data는 " + count + "개 있습니다");
        return "index";
    }
    
}