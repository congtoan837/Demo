package com.poly.controller;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.poly.model.User;
import com.poly.services.UserService;

@Controller
public class mainController {
	
	@Autowired
	private UserService userService;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index() {
		return "user/index";
	}

	@RequestMapping(value = "/admin", method = RequestMethod.GET)
	public String adminLogin() {

		return "admin/login";
	}

	@RequestMapping(value = "/login",method = RequestMethod.POST)
	public String loginCheck(@ModelAttribute(name="loginForm") User user, ModelMap model) {
		String username = user.getUsername().toString();
		String password = user.getPassword().toString();		
		
		List<User> list = (List<User>) userService.findAll();
		
		for(Iterator<User> iterator = list.iterator(); iterator.hasNext();) {
			User user1 = (User) iterator.next();
			if (user1.getUsername().equals(username) && user1.getPassword().equals(password)) {
				model.addAttribute("users", list);
				return "admin/account/listaccount";
			}
		}
		return "login";
	}

}
