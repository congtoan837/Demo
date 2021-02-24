package com.poly.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poly.model.*;
import com.poly.repositories.*;

@RestController
@RequestMapping("/api")
public class RestfulAPI {
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private BrandRepository brandRepository;
	@Autowired
	private CategoryRepository categoryRepository;
	@Autowired
	private CartRepository cartRepository;
	@Autowired
	private BlogRepository blogRepository;
	@Autowired
	private PromotionRepository promotionRepository;
	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private AdminRepository adminRepository;
	
	DateFormat format = new SimpleDateFormat("dd/mm/YYYY");
	
	// API CUSTOMER //
		@PostMapping("/listcustomer")
		List<Customer> allcustomer() {
			return (List<Customer>) customerRepository.findAll();
		}

		@PostMapping("/newcustomer")
		Customer newProduct(@RequestBody Customer customer) {
			return customerRepository.save(customer);
		}

		@PostMapping("/findcustomer")
		Customer one(@RequestBody Customer customer) throws Exception {
			Integer id = customer.getId();
			return customerRepository.findById(id).orElseThrow(() -> new Exception("Customer " + id + " not found"));
		}

		@PostMapping("/editcustomer")
		Customer replaceCustomer(@RequestBody Customer customer) throws Exception {
			Integer id = customer.getId();
			if (customer.getImage() == ("")) {
				return customerRepository.findById(id).<Customer>map(mycustomer -> {
					mycustomer.setName(customer.getName());
					mycustomer.setEmail(customer.getEmail());
					mycustomer.setPhone(customer.getPhone());
					mycustomer.setPassword(customer.getPassword());
					mycustomer.setAddress(customer.getAddress());
					mycustomer.setStatus(customer.getStatus());
					return customerRepository.save(mycustomer);
				}).orElseThrow(() -> new Exception("Customer " + id + " not found"));
			} else {
				return customerRepository.findById(id).<Customer>map(mycustomer -> {
					mycustomer.setImage(customer.getImage());
					mycustomer.setName(customer.getName());
					mycustomer.setEmail(customer.getEmail());
					mycustomer.setPhone(customer.getPhone());
					mycustomer.setPassword(customer.getPassword());
					mycustomer.setAddress(customer.getAddress());
					mycustomer.setStatus(customer.getStatus());
					return customerRepository.save(mycustomer);
				}).orElseThrow(() -> new Exception("Customer " + id + " not found"));
			}
		}

		@PostMapping("/deletecustomer")
		void deleteCustomer(@RequestBody Customer customer) {
			Integer id = customer.getId();
			customerRepository.deleteById(id);
		}
		// API CUSTOMER //
	
	// API PRODUCT //
	@PostMapping("/listproduct")
	List<Product> allproduct() {
		return (List<Product>) productRepository.findAll();
	}

	@PostMapping("/newproduct")
	Product newProduct(@RequestBody Product newProduct) {
		return productRepository.save(newProduct);
	}

	@PostMapping("/findproduct")
	Product one(@RequestBody Product newProduct) throws Exception {
		Integer id = newProduct.getId();
		return productRepository.findById(id).orElseThrow(() -> new Exception("Product " + id + " not found"));
	}

	@PostMapping("/editproduct")
	Product replaceEmployee(@RequestBody Product newProduct) throws Exception {
		Integer id = newProduct.getId();
		if (newProduct.getImage() == ("")) {
			return productRepository.findById(id).map(product -> {
				product.setName(newProduct.getName());
				product.setPrice(newProduct.getPrice());
				product.setDescription(newProduct.getDescription());
				product.setStatus(newProduct.getStatus());
				product.setBrand(newProduct.getBrand());
				product.setQuantity(newProduct.getQuantity());
				product.setCategory(newProduct.getCategory());
				return productRepository.save(product);
			}).orElseThrow(() -> new Exception("Product " + id + " not found"));
		} else {
			return productRepository.findById(id).map(product -> {
				product.setName(newProduct.getName());
				product.setPrice(newProduct.getPrice());
				product.setImage(newProduct.getImage());
				product.setDescription(newProduct.getDescription());
				product.setStatus(newProduct.getStatus());
				product.setBrand(newProduct.getBrand());
				product.setQuantity(newProduct.getQuantity());
				product.setCategory(newProduct.getCategory());
				return productRepository.save(product);
			}).orElseThrow(() -> new Exception("Product " + id + " not found"));
		}
	}

	@PostMapping("/deleteproduct")
	void deleteProduct(@RequestBody Product product) {
		Integer id = product.getId();
		productRepository.deleteById(id);
	}
	// API PRODUCT //

	// API BRAND //
	@PostMapping("/listbrand")
	List<Brand> listbrand() {
		return (List<Brand>) brandRepository.findAll();
	}

	@PostMapping("/newbrand")
	Brand newBrand(@RequestBody Brand brand) {
		return brandRepository.save(brand);
	}

	@PostMapping("/deletebrand")
	void deleteBrand(@RequestBody Brand brand) {
		brandRepository.deleteById(brand.getId());
	}
	// API BRAND //

	// API CATEGORY //
	@PostMapping("/listcategory")
	List<Category> listcategory() {
		return (List<Category>) categoryRepository.findAll();
	}

	@PostMapping("/newcategory")
	Category newCategory(@RequestBody Category newCategory) {
		return categoryRepository.save(newCategory);
	}

	@PostMapping("/deletecategory")
	void deleteCategory(@RequestBody Category newCategory) {
		categoryRepository.deleteById(newCategory.getId());
	}
	// API CATEGORY //

	// API BLOG //
	@PostMapping("/listblog")
	List<Blog> listBlog() {
		return (List<Blog>) blogRepository.findAll();
	}

	@PostMapping("/newblog")
	Blog newblog(@RequestBody Blog blog) {
		return blogRepository.save(blog);
	}

	@PostMapping("/findblog")
	Blog one(@RequestBody Blog blog) throws Exception {
		Integer id = blog.getId();
		return blogRepository.findById(id).orElseThrow(() -> new Exception("Product " + id + " not found"));
	}

	@PostMapping("/editblog")
	Blog replaceBlog(@RequestBody Blog blog) throws Exception {
		Integer id = blog.getId();
		if (blog.getImage() == ("")) {
			return blogRepository.findById(id).<Blog>map(myblog -> {
				myblog.setTitle(blog.getTitle());
				myblog.setDescription(blog.getDescription());
				myblog.setContent(blog.getContent());
				myblog.setCreateBy(blog.getCreateBy());
				return blogRepository.save(myblog);
			}).orElseThrow(() -> new Exception("Blog " + blog.getTitle() + " not found"));
		} else {
			return blogRepository.findById(id).<Blog>map(myblog -> {
				myblog.setTitle("11");
				myblog.setImage(blog.getImage());
				myblog.setDescription(blog.getDescription());
				myblog.setContent(blog.getContent());
				myblog.setCreateBy(blog.getCreateBy());
				return blogRepository.save(myblog);
			}).orElseThrow(() -> new Exception("Blog " + id + " not found"));
		}
	}

	@PostMapping("/deleteblog")
	void deleteBlog(@RequestBody Blog blog) {
		Integer id = blog.getId();
		blogRepository.deleteById(id);
	}

	// API BLOG //
	
	// API PROMOTION //
	@PostMapping("/listpromo")
	List<Promotion> listPromo() {
		return (List<Promotion>) promotionRepository.findAll();
	}

	@PostMapping("/newpromo")
	Promotion newpromo(@RequestBody Promotion promotion) {			
		return promotionRepository.save(promotion);
	}

	@PostMapping("/editpromo")
	Promotion editpromo(@RequestBody Promotion promotion) throws Exception {
		Integer id = promotion.getId();
		
			return promotionRepository.findById(id).<Promotion>map(mypromo -> {
				mypromo.setPercents(promotion.getPercents());
				mypromo.setTimeStart(promotion.getTimeStart());
				mypromo.setTimeEnd(promotion.getTimeEnd());
				mypromo.setDescription(promotion.getDescription());
				return promotionRepository.save(mypromo);
			}).orElseThrow(() -> new Exception("promotion " + id + " not found"));						
	}

	@PostMapping("/deletepromo")
		void deletepromote(@RequestBody Promotion promotion) {
		Integer id = promotion.getId();
		promotionRepository.deleteById(id);
	}

	// API BLOG //
	
	// API ACCOUNT //
	@PostMapping("/listaccount")
	List<Admins> listaccount() {
		return (List<Admins>) adminRepository.findAll();
	}

	@PostMapping("/newaccount")
	Admins newaccount(@RequestBody Admins admins) {			
		return adminRepository.save(admins);
	}

	@PostMapping("/editaccount")
	Admins editaccount(@RequestBody Admins admins) throws Exception {
		Integer id = admins.getId();
			
			return adminRepository.findById(id).<Admins>map(myadmin -> {
				myadmin.setName(admins.getName());
				myadmin.setPassword(admins.getPassword());					
				return adminRepository.save(myadmin);
			}).orElseThrow(() -> new Exception("Account " + id + " not found"));						
	}

	@PostMapping("/deleteaccount")
	void deleteaccount(@RequestBody Admins admins) {
		Integer id = admins.getId();
		adminRepository.deleteById(id);
	}	
	// API ACCOUNT //
	
	// API CART //
	@PostMapping("/cart")
	List<Cart> cart() {
		return (List<Cart>) cartRepository.findAll();
	}
	// API CART //
}
