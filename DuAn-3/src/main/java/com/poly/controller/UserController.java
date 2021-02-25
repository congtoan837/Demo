package com.poly.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.poly.model.Product;
import com.poly.repositories.ProductRepository;

@Controller
public class UserController {
	@Autowired
	private ProductRepository productRepository;
	
	@GetMapping("/")
	public String process(Model model, HttpSession session) {
		return "user/index";
	}

	@GetMapping("/about")
	public String about(HttpServletRequest request) {
		ArrayList<String> list = new ArrayList<String>();
		list.add("a");
		list.add("b");
		list.add("c");
		@SuppressWarnings("unchecked")
		ArrayList<String> messages = (ArrayList<String>) request.getSession().getAttribute("MY_SESSION_MESSAGES");
		if (messages == null) {
			messages = new ArrayList<>();
			request.getSession().setAttribute("MY_SESSION_MESSAGES", messages);
		}
		messages.addAll(list);
		request.getSession().setAttribute("MY_SESSION_MESSAGES", messages);
		System.out.print(messages);
		return "user/about";
	}
	
	@GetMapping("/shop")
	public String shop() {
		return "user/shop";
	}
	
	@GetMapping("/contact")
	public String contact(HttpServletRequest request) {
		request.getSession().invalidate();
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
		Product list = productRepository.findById(id).get();
		model.addAttribute("Product", list);
		return "user/shop-detail";
	}
}