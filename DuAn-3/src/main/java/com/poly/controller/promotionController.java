package com.poly.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/customer")
public class promotionController {
	
	@RequestMapping("/promotionlist")
	public String list() {
		return "/listpromotion";
	}
	
	@RequestMapping("/promotionadd")
	public String add() {
		return "addproduct";
	}
}
