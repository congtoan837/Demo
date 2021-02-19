package com.poly.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poly.model.Brand;
import com.poly.model.Cart;
import com.poly.model.Category;
import com.poly.model.Product;
import com.poly.repositories.BrandRepository;
import com.poly.repositories.CategoryRepository;
import com.poly.repositories.ProductRepository;
import com.poly.repositories.CartRepository;

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
	    return productRepository.findById(id)
	    	.orElseThrow(() -> new Exception("Product " + id +" not found"));	
	  }
	
	@RequestMapping("/edit")
	Product replaceEmployee(@RequestBody Product newProduct) throws Exception {
		Integer id = newProduct.getId();
		if(newProduct.getImage() == ("")) {
	    return productRepository.findById(id)
	      .map(product -> {
	    	  product.setName(newProduct.getName());
	    	  product.setPrice(newProduct.getPrice());
	    	  product.setDescription(newProduct.getDescription());
	    	  product.setStatus(newProduct.getStatus());
	    	  product.setBrand(newProduct.getBrand());
	    	  product.setQuantity(newProduct.getQuantity());
	    	  product.setCategory(newProduct.getCategory());
	        return productRepository.save(product);
	      })
	      .orElseThrow(() -> new Exception("Product " + id +" not found"));	  
	}else {
		return productRepository.findById(id)
			      .map(product -> {
			    	  product.setName(newProduct.getName());
			    	  product.setPrice(newProduct.getPrice());
			    	  product.setImage(newProduct.getImage());
			    	  product.setDescription(newProduct.getDescription());
			    	  product.setStatus(newProduct.getStatus());
			    	  product.setBrand(newProduct.getBrand());
			    	  product.setQuantity(newProduct.getQuantity());
			    	  product.setCategory(newProduct.getCategory());
			        return productRepository.save(product);
			      })
			      .orElseThrow(() -> new Exception("Product " + id +" not found"));	  
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
	
	// API CART //
	@RequestMapping("/cart")
	  List<Cart> cart() {
	    return (List<Cart>) cartRepository.findAll();
	  }
	// API CART //
}

