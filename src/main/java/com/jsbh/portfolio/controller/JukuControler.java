package com.jsbh.portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * JukuControler
 */
@Controller
public class JukuControler {

    @RequestMapping("/juku")
    public String goToJuku() {
        
        System.out.println("zzzz");
        return "juku";
    }
}