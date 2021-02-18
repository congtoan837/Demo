package com.poly.controller;

import java.util.List;

import com.poly.model.Admins;
import com.poly.model.Brand;
import com.poly.model.Category;
import com.poly.model.Customer;
import com.poly.model.Product;
import com.poly.services.AdminService;
import com.poly.services.BrandService;
import com.poly.services.CategoryService;
import com.poly.services.CustomerService;
import com.poly.services.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private AdminService adminService;
	@Autowired
	private ProductService productService;
	@Autowired
	private BrandService brandService;
	@Autowired
	private CategoryService categoryService;
	@Autowired
	private CustomerService customerService;
	
	// STATS CONTROLLER
	@RequestMapping("/")
	public String stats() {
		return "admin/stats";
	}
	// STATS CONTROLLER
	
	// ACCOUNT CONTROLLER
	@RequestMapping("/account")
	public String listaccount(ModelMap model) {
		List<Admins> list = (List<Admins>) adminService.findAll();
		model.addAttribute("Admins", list);
		return "admin/listaccount";
	}

	@PostMapping("/newacc")
	public String addaccount(Admins admins, RedirectAttributes redirectAttributes) {
		try{
			if(admins.getName() != ("") && admins.getPassword() != ("")) {
				adminService.save(admins);
				redirectAttributes.addFlashAttribute("status", "1");
				redirectAttributes.addFlashAttribute("message", "Thêm thành công !");
			}else {
				redirectAttributes.addFlashAttribute("status", "0");
				redirectAttributes.addFlashAttribute("message", "Thêm thất bại ! tên tài khoản và mật khẩu không được trống");
			}
		}catch(Exception e) {
			redirectAttributes.addFlashAttribute("status", "0");
			redirectAttributes.addFlashAttribute("message", "Thêm thất bại ! tên tài khoản đã tồn tại");
		}
		return "redirect:/admin/account";
	}

	@PostMapping("/editacc/{id}")
	public String editaccount(ModelMap model, @PathVariable(name = "id") Integer id, RedirectAttributes redirectAttributes,
			@RequestParam(name = "editname") String name, 
			@RequestParam(name = "editpassword") String password) 
	{
		if (name != ("") && password != ("")) {
			Admins admins = adminService.findById(id).get();
			admins.setName(name);
			admins.setPassword(password);
			adminService.save(admins);
			redirectAttributes.addFlashAttribute("message", "Sửa thành công !");
			redirectAttributes.addFlashAttribute("status", "1");
		}else {
			redirectAttributes.addFlashAttribute("message", "Sửa thất bại !");
			redirectAttributes.addFlashAttribute("status", "0");
		}
		return "redirect:/admin/account";

	}

	@PostMapping(value = "/deleteacc/{id}")
	public String deleteaccount(ModelMap model, @PathVariable(name = "id") Integer id, RedirectAttributes redirectAttributes) {		
		if(id != null) {
			adminService.deleteById(id);
			redirectAttributes.addFlashAttribute("message", "Xóa thành công !");
			redirectAttributes.addFlashAttribute("status", "1");
		}else {
			redirectAttributes.addFlashAttribute("message", "Xóa thất bại !");
			redirectAttributes.addFlashAttribute("status", "0");
		}
		return "redirect:/admin/account";
	}
	// ACCOUNT CONTROLLER

	// PRODUCT CONTROLLER
	@RequestMapping("/product")
	public String listproduct(ModelMap model) {
		
		return "admin/listproduct";
	}

	@PostMapping("/newproduct")
	public String addproduct(ModelMap model, Product product, RedirectAttributes redirectAttributes) {
		try{
			if(product.getImage() != ("") && product.getName() != ("") && product.getPrice() >=1 && product.getBrand() != ("") && product.getQuantity() >=0 && product.getCategory() != ("") && product.getStatus() != ("")) {
				productService.save(product);
				redirectAttributes.addFlashAttribute("status", "1");
				redirectAttributes.addFlashAttribute("message", "Thêm thành công !");
			}else {
				redirectAttributes.addFlashAttribute("status", "0");
				redirectAttributes.addFlashAttribute("message", "Thêm thất bại !");
			}
		}catch(Exception e) {
			redirectAttributes.addFlashAttribute("status", "0");
			redirectAttributes.addFlashAttribute("message", "Thêm thất bại !");
		}
		return "redirect:/admin/product";
	}
	
	@PostMapping("/newbrand")
	public String addbrand(Brand brand, RedirectAttributes redirectAttributes) {
		try{
			if(brand.getName() != ("")) {
				brandService.save(brand);
				redirectAttributes.addFlashAttribute("status", "1");
				redirectAttributes.addFlashAttribute("message", "Thêm thành công !");
			}else {
				redirectAttributes.addFlashAttribute("status", "0");
				redirectAttributes.addFlashAttribute("message", "Thêm thất bại !");
			}
		}catch(Exception e) {
			redirectAttributes.addFlashAttribute("status", "0");
			redirectAttributes.addFlashAttribute("message", "Thêm thất bại !");
		}
		return "redirect:/admin/product";
	}
	
	@PostMapping("/newcategory")
	public String addcategory(Category category, RedirectAttributes redirectAttributes) {
		try{
			if(category.getName() != ("")) {
				categoryService.save(category);
				redirectAttributes.addFlashAttribute("status", "1");
				redirectAttributes.addFlashAttribute("message", "Thêm thành công !");
			}else {
				redirectAttributes.addFlashAttribute("status", "0");
				redirectAttributes.addFlashAttribute("message", "Thêm thất bại !");
			}
		}catch(Exception e) {
			redirectAttributes.addFlashAttribute("status", "0");
			redirectAttributes.addFlashAttribute("message", "Thêm thất bại !");
		}
		return "redirect:/admin/product";
	}
	
	@PostMapping("/editproduct/{id}")
	public String editproduct(ModelMap model, @PathVariable(name = "id") Integer id, RedirectAttributes redirectAttributes,
			@RequestParam(name = "editname") String name, 
			@RequestParam(name = "editprice") int price,
			@RequestParam(name = "editimage") String image,
			@RequestParam(name = "editbrand") String brand,
			@RequestParam(name = "editquantity") int quantity,
			@RequestParam(name = "editcategory") String category,
			@RequestParam(name = "editstatus") String status,
			@RequestParam(name = "editdescription") String description)
			 
	{
		try {
		if (image != ("") && name != ("") && price >=1 && brand != ("") && quantity >=0 && category != ("") && status != ("")) {
			Product product = productService.findById(id).get();
			product.setName(name);
			product.setPrice(price);
			product.setImage(image);
			product.setBrand(brand);
			product.setQuantity(quantity);
			product.setCategory(category);
			product.setStatus(status);
			product.setDescription(description);
			productService.save(product);
			redirectAttributes.addFlashAttribute("message", "Sửa thành công !");
			redirectAttributes.addFlashAttribute("status", "1");
		}else if(name != ("") && price >=1 && brand != ("") && quantity >=1 && category != ("") && status != ("")){
			Product product = productService.findById(id).get();
			product.setName(name);
			product.setPrice(price);
			product.setBrand(brand);
			product.setQuantity(quantity);
			product.setCategory(category);
			product.setStatus(status);
			product.setDescription(description);
			productService.save(product);
			redirectAttributes.addFlashAttribute("message", "Sửa thành công !");
			redirectAttributes.addFlashAttribute("status", "1");
		}
		}catch(Exception e) {
			redirectAttributes.addFlashAttribute("status", "0");
			redirectAttributes.addFlashAttribute("message", "Sửa thất bại !");
		}
		return "redirect:/admin/product";

	}

	@PostMapping(value = "/deleteproduct/{id}")
	public String deleteproduct(ModelMap model, @PathVariable(name = "id") Integer id, RedirectAttributes redirectAttributes) {
		if(id != null) {
			productService.deleteById(id);
			redirectAttributes.addFlashAttribute("message", "Xóa thành công !");
			redirectAttributes.addFlashAttribute("status", "1");
		}else {
			redirectAttributes.addFlashAttribute("message", "Xóa thất bại !");
			redirectAttributes.addFlashAttribute("status", "0");
		}
		return "redirect:/admin/product";
	}
	
	@PostMapping(value = "/deletebrand/{id}")
	public String deletebrand(ModelMap model, @PathVariable(name = "id") Integer id, RedirectAttributes redirectAttributes) {		
		if(id != null) {
			brandService.deleteById(id);
			redirectAttributes.addFlashAttribute("message", "Xóa thành công !");
			redirectAttributes.addFlashAttribute("status", "1");
		}else {
			redirectAttributes.addFlashAttribute("message", "Xóa thất bại !");
			redirectAttributes.addFlashAttribute("status", "0");
		}
		return "redirect:/admin/product";
	}
	// PRODUCT CONTROLLER
	
	// CUSTOMER CONTROLLER
	@RequestMapping("/customer")
	public String listCustomer(ModelMap model) {
		List<Customer> list = (List<Customer>) customerService.findAll();
		model.addAttribute("Customer", list);
		return "admin/listcustomer";
	}

	@PostMapping("/newcustomer")
	public String addcustomer(Customer customer, RedirectAttributes redirectAttributes) {
		try{
			if(customer.getImage() != ("") && customer.getName() != ("") && customer.getEmail() != ("") && customer.getPhone() != ("") && customer.getPassword() != ("") && customer.getAddress() != ("") && customer.getStatus() != ("")) {
				customerService.save(customer);
				redirectAttributes.addFlashAttribute("status", "1");
				redirectAttributes.addFlashAttribute("message", "Thêm thành công !");
			}else {
				redirectAttributes.addFlashAttribute("status", "0");
				redirectAttributes.addFlashAttribute("message", "Thêm thất bại !");
			}
		}catch(Exception e) {
			redirectAttributes.addFlashAttribute("status", "0");
			redirectAttributes.addFlashAttribute("message", "Thêm thất bại !");
		}
		return "redirect:/admin/customer";
	}

	@PostMapping("/editcustomer/{id}")
	public String editcustomer(ModelMap model, @PathVariable(name = "id") Integer id, RedirectAttributes redirectAttributes,
			@RequestParam(name = "editname") String name, 
			@RequestParam(name = "editemail") String email,
			@RequestParam(name = "editimage") String image,
			@RequestParam(name = "editphone") String phone,
			@RequestParam(name = "editpassword") String password,
			@RequestParam(name = "editaddress") String address,
			@RequestParam(name = "editstatus") String status)
	{
		try {
			if (image != ("") && name != ("") && email != ("") && phone != ("") && password != ("") && address != ("") && status != ("")) {
				Customer customer = customerService.findById(id).get();
				customer.setName(name);
				customer.setEmail(email);
				customer.setImage(image);
				customer.setPhone(phone);
				customer.setPassword(password);
				customer.setAddress(address);
				customer.setStatus(status);
				customerService.save(customer);
				redirectAttributes.addFlashAttribute("message", "Sửa thành công !");
				redirectAttributes.addFlashAttribute("status", "1");
			}else if(name != ("") && email != ("") && phone != ("") && password != ("") && address != ("") && status != ("")){
				Customer customer = customerService.findById(id).get();
				customer.setName(name);
				customer.setEmail(email);
				customer.setPhone(phone);
				customer.setPassword(password);
				customer.setAddress(address);
				customer.setStatus(status);
				customerService.save(customer);
				redirectAttributes.addFlashAttribute("message", "Sửa thành công !");
				redirectAttributes.addFlashAttribute("status", "1");
			}
			}catch(Exception e) {
				redirectAttributes.addFlashAttribute("status", "0");
				redirectAttributes.addFlashAttribute("message", "Sửa thất bại !");
			}
		return "redirect:/admin/customer";
	}

	@PostMapping(value = "/deletecustomer/{id}")
	public String deletecustomer(ModelMap model, @PathVariable(name = "id") Integer id, RedirectAttributes redirectAttributes) {		
		if(id != null) {
			customerService.deleteById(id);
			redirectAttributes.addFlashAttribute("message", "Xóa thành công !");
			redirectAttributes.addFlashAttribute("status", "1");
		}else {
			redirectAttributes.addFlashAttribute("message", "Xóa thất bại !");
			redirectAttributes.addFlashAttribute("status", "0");
		}
		return "redirect:/admin/customer";
	}
	// CUSTOMER CONTROLLER
	
	// BLOG CONTROLLER
	// BLOG CONTROLLER
	
	// PROMOTION CONTROLLER	
	// PROMOTION CONTROLLER
	
	// ORDER CONTROLLER
	// ORDER CONTROLLER
}
