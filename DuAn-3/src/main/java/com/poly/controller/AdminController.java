package com.poly.controller;

import java.util.List;
import java.util.Optional;

import com.poly.model.Admins;
import com.poly.repositories.AdminRepository;
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
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private AdminService adminService;
	
	@RequestMapping("/account")
	public String list(ModelMap model) {
		List<Admins> list = (List<Admins>) adminService.findAll();
		model.addAttribute("Admins", list);
		return "admin/account/listaccount";
	}
	
	@PostMapping("/newacc")
	public String add(ModelMap model, Admins admins) {
		List<Admins> list = (List<Admins>) adminService.findAll();	
		adminService.save(admins);	
		return "redirect:/admin/account";
	}
	
	@GetMapping("/editacc/{id}")
	public String edit(ModelMap model, @PathVariable(name = "id") Integer id) {
		
		return "redirect:/admin/account";
	}
	
	
	@PostMapping(value = "/deleteacc/{id}")
	public String delete(ModelMap model, @PathVariable(name = "id") Integer id) {
		adminService.deleteById(id);
		return "redirect:/admin/account";
	}
}
