package com.poly.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.poly.model.Product;
import com.poly.services.ProductService;

@RestController
public class UserController {
	@Autowired
	private ProductService productService;
	
	@GetMapping("/")
	public ModelAndView index(ModelMap model) {
		List<Product> list = (List<Product>) productService.findAll();
		model.addAttribute("Product", list);
		ModelAndView mav = new ModelAndView("user/index");
		return mav;
	}
	
	
	@PostMapping("/api")
	  public ResponseEntity<List<Product>> getAllTutorials() {
	    try {
	      List<Product> tutorials = new ArrayList<Product>();
     
	      tutorials = (List<Product>) productService.findAll();	      

	      return new ResponseEntity<>(tutorials, HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
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
