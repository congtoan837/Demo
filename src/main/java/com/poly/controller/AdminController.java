package com.poly.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminController {
	
	// STATS CONTROLLER
	@RequestMapping("")
	public String stats() {
		return "admin/stats";
	}
	// STATS CONTROLLER
	
	// ACCOUNT CONTROLLER
	@RequestMapping("/account")
	public String listaccount() {
		return "admin/listaccount";
	}
	// ACCOUNT CONTROLLER

	// PRODUCT CONTROLLER
	@RequestMapping("/product")
	public String listproduct() {		
		return "admin/listproduct";
	}
	// PRODUCT CONTROLLER
	
	// CUSTOMER CONTROLLER
	@RequestMapping("/customer")
	public String listCustomer() {		
		return "admin/listcustomer";
	}
	// CUSTOMER CONTROLLER
	
	// BLOG CONTROLLER
	@RequestMapping("/blog")
	public String list() {
		return "admin/listblog";
	}
	// BLOG CONTROLLER
	
	// PROMOTION CONTROLLER	
	@RequestMapping("/promotion")
	public String listpromo() {
		return "admin/listpromotion";
	}
	// PROMOTION CONTROLLER
	@RequestMapping("/order")
	public String listorderdetails() {
		return "admin/listorderdetails";
	}
	// ORDER CONTROLLER
	// ORDER CONTROLLER
}
