package com.poly.controller;

import java.util.List;
import java.util.Optional;

import com.poly.model.Admins;
import com.poly.services.AdminService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/account")
public class AdminController {
	@Autowired
	private AdminService adminService;
	
	@RequestMapping("/list")
	public String list(ModelMap model) {
		List<Admins> list = (List<Admins>) adminService.findAll();
		model.addAttribute("Admins", list);
		return "admin/account/listaccount";
	}
	
	@PostMapping("/add")
	public String add(ModelMap model, Admins admins) {
		adminService.save(admins);	
		return "redirect:/account/list";
	}
	
	@GetMapping("/edit/{id}")
	public String edit(ModelMap model, @PathVariable(name = "id") Integer id) {
		
		return "redirect:/account/list";
	}
	
	
	@PostMapping(value = "/delete/{id}")
	public String delete(ModelMap model, @PathVariable(name = "id") Integer id) {
		adminService.deleteById(id);
		return "redirect:/account/list";
	}
}
