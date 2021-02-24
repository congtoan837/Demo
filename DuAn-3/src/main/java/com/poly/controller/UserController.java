package com.poly.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.poly.model.Product;
import com.poly.services.ProductService;

@Controller
public class UserController {
	@Autowired
	private ProductService productService;
	
	@GetMapping("/")
	public String index() {		
		return "user/index";
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
	
	@GetMapping("/detail/{id}")
	public String detais(ModelMap model, @PathVariable(name = "id") Integer id) {	
		Product list = productService.findById(id).get();
		model.addAttribute("Product", list);
		return "user/shop-detail";
	}
}