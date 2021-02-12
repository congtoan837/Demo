package com.poly.controller;

import java.util.List;
import java.util.Optional;

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
	public String index(ModelMap model) {
		List<Product> list = (List<Product>) productService.findAll();
		model.addAttribute("Product", list);
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
	
	@GetMapping("/detail/{id}")
	public String detais(ModelMap model, @PathVariable(name = "id") Integer id) {
		Optional<Product> list = productService.findById(id);
		System.out.print(list);
		return "user/shop-detail";
	}
}
