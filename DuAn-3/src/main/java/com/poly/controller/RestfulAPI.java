package com.poly.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

	// API PRODUCT //
	@RequestMapping("/listproduct")
	List<Product> allproduct() {
		return (List<Product>) productRepository.findAll();
	}

	@RequestMapping("/new")
	Product newProduct(@RequestBody Product newProduct) {
		return productRepository.save(newProduct);
	}

	@RequestMapping("/find")
	Product one(@RequestBody Product newProduct) throws Exception {
		Integer id = newProduct.getId();
		return productRepository.findById(id).orElseThrow(() -> new Exception("Product " + id + " not found"));
	}

	@RequestMapping("/edit")
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

	@RequestMapping("/delete")
	void deleteProduct(@RequestBody Product product) {
		Integer id = product.getId();
		productRepository.deleteById(id);
	}
	// API PRODUCT //

	// API BRAND //
	@RequestMapping("/listbrand")
	List<Brand> listbrand() {
		return (List<Brand>) brandRepository.findAll();
	}

	@RequestMapping("/newbrand")
	Brand newBrand(@RequestBody Brand brand) {
		return brandRepository.save(brand);
	}

	@RequestMapping("/deletebrand")
	void deleteBrand(@RequestBody Brand brand) {
		brandRepository.deleteById(brand.getId());
	}
	// API BRAND //

	// API CATEGORY //
	@RequestMapping("/listcategory")
	List<Category> listcategory() {
		return (List<Category>) categoryRepository.findAll();
	}

	@RequestMapping("/newcategory")
	Category newCategory(@RequestBody Category newCategory) {
		return categoryRepository.save(newCategory);
	}

	@RequestMapping("/deletecategory")
	void deleteCategory(@RequestBody Category newCategory) {
		categoryRepository.deleteById(newCategory.getId());
	}
	// API CATEGORY //

	// API BLOG //
	@RequestMapping("/listblog")
	List<Blog> listBlog() {
		return (List<Blog>) blogRepository.findAll();
	}

	@RequestMapping("/newblog")
	Blog newblog(@RequestBody Blog blog) {
		return blogRepository.save(blog);
	}

	@RequestMapping("/findblog")
	Blog one(@RequestBody Blog blog) throws Exception {
		Integer id = blog.getId();
		return blogRepository.findById(id).orElseThrow(() -> new Exception("Product " + id + " not found"));
	}

	@RequestMapping("/editblog")
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

	@RequestMapping("/deleteblog")
	void deleteBlog(@RequestBody Blog blog) {
		Integer id = blog.getId();
		blogRepository.deleteById(id);
	}

	// API BLOG //
	
	// API PROMOTION //
		@RequestMapping("/listpromo")
		List<Promotion> listPromo() {
			return (List<Promotion>) promotionRepository.findAll();
		}

		@RequestMapping("/newpromo")
		Promotion newpromo(@RequestBody Promotion promotion) {
			return promotionRepository.save(promotion);
		}

		@RequestMapping("/editpromo")
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

		@RequestMapping("/deletepromote")
		void deletepromote(@RequestBody Promotion promotion) {
			Integer id = promotion.getId();
			promotionRepository.deleteById(id);
		}

		// API BLOG //
	
	// API CART //
	@RequestMapping("/cart")
	List<Cart> cart() {
		return (List<Cart>) cartRepository.findAll();
	}
	// API CART //
}
