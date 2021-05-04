package com.poly.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class UserController {
	
	@GetMapping("/")
	public String index() {
		return "user/index";
	}

	@GetMapping("/login")
	public String login() {
		return "user/login";
	}

	@GetMapping("/about")
	public String about() {
		return "user/about";
	}
	
	@GetMapping("/shop")
	public String shop() {
		return "user/shop";
	}
	
	@GetMapping("/contact")
	public String contact() {
		return "user/contact-us";
	}
	
	@GetMapping("/news")
	public String news() {
		return "user/news";
	}
	
	@GetMapping("/cart")
	public String cart() {
		return "user/cart";
	}
	
	@GetMapping("/coupon")
	public String coupon() {
		return "user/coupon";
	}
	
	@GetMapping("/my-account")
	public String account() {
		return "user/my-account";
	}
	
	@GetMapping("/checkout")
	public String checkout() {
		return "user/checkout";
	}

	@GetMapping("/order")
	public String order() {
		return "user/order";
	}

	@GetMapping("/account-setting")
	public String accountdetais() {
		return "user/account-detail";
	}

	@GetMapping("/myorder")
	public String myorder() {
		return "user/my-order";
	}
	
	@GetMapping("/detail/{id}")
	public String detais(@PathVariable(name = "id") Integer id) {	
		return "user/shop-detail";
	}
}