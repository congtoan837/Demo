package com.poly.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/product")
public class productController {
	
	@RequestMapping("/listproduct")
	public String list() {
		return "admin/product/listproduct";
	}
	
	@RequestMapping("/addproduct")
	public String add() {
		return "admin/product/addproduct";
	}
	
	@RequestMapping("/listproduct2")
	public String list2() {
		return "admin/product/addproduct2";
	}
}
