package com.jsbh.portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * MainController
 */
@Controller
public class MainController {

    @RequestMapping("/")
    public String goingToMain() {
        return "index";
    }
    
}