package com.poly.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class statsController {

	@RequestMapping("/stats")
	public String list() {
		return "admin/stats";
	}
}
