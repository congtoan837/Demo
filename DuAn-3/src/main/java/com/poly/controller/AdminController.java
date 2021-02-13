package com.poly.controller;

import java.util.List;

import com.poly.model.Admins;
import com.poly.model.Product;
import com.poly.services.AdminService;
import com.poly.services.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private AdminService adminService;
	@Autowired
	private ProductService productService;
	
	// ACCOUNT CONTROLLER
	@RequestMapping("/account")
	public String listaccount(ModelMap model) {
		List<Admins> list = (List<Admins>) adminService.findAll();
		model.addAttribute("Admins", list);
		return "admin/account/listaccount";
	}
	
	@PostMapping("/newacc")
	public String addaccount(ModelMap model, Admins admins, @RequestParam(value = "name") String username) {
		adminService.save(admins);
		return "redirect:/admin/account";
	}
	
	@GetMapping("/editacc/{id}")
	public String editaccount(ModelMap model, @PathVariable(name = "id") Integer id) {
		Admins list = adminService.findById(id).get();
		model.addAttribute("account", list);
		return "redirect:/admin/account";
	}
	
	
	@PostMapping(value = "/deleteacc/{id}")
	public String deleteaccount(ModelMap model, @PathVariable(name = "id") Integer id) {
		adminService.deleteById(id);
		return "redirect:/admin/account";
	}
	// ACCOUNT CONTROLLER
	
	// PRODUCT CONTROLLER
	@RequestMapping("/product")
	public String listproduct(ModelMap model) {
		List<Product> list = (List<Product>) productService.findAll();
		model.addAttribute("Product", list);
		return "admin/product/listproduct";
	}
	
	@PostMapping("/newproduct")
	public String addproduct(ModelMap model, Product product) {
		productService.save(product);
		return "redirect:/admin/product";
	}
	
	@GetMapping("/editproduct/{id}")
	public String editproduct(ModelMap model) {
		
		return "redirect:/admin/account";
	}
	
	@PostMapping(value = "/deleteproduct/{id}")
	public String deleteproduct(ModelMap model, @PathVariable(name = "id") Integer id) {
		productService.deleteById(id);
		return "redirect:/admin/product";
	}
	// PRODUCT CONTROLLER
}
