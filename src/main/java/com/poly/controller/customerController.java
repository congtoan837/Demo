package com.poly.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/customer")
public class customerController {

	@RequestMapping("/list")
	public String list() {
		return "admin/customer/listcustomer";
	}
}
