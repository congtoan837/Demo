package com.poly.controller;

import java.util.List;

import com.poly.model.User;
import com.poly.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/account")
public class AdminController {
	@Autowired
	private UserService userService;
	
	@RequestMapping("/list")
	public String list(ModelMap model) {
		List<User> list = (List<User>) userService.findAll();
		model.addAttribute("users", list);
		
		return "admin/account/listaccount";
	}
	@RequestMapping("/add")
	public String add() {
		return "admin/account/addaccount";
	}
	@GetMapping("/insert")
	public String adduser() {
		
	}
	
	@GetMapping("/saveOrupdate")
	public String saveOrupdate() {
		
	}
	
	@GetMapping("/edit")
	public String edit() {
		
	}
	
	@GetMapping("/delete")
	public String delete() {
		
	}
}
