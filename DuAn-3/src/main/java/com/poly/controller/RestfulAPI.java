package com.poly.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poly.model.Brand;
import com.poly.model.Category;
import com.poly.model.Product;
import com.poly.repositories.BrandRepository;
import com.poly.repositories.CategoryRepository;
import com.poly.repositories.ProductRepository;

@RestController
@RequestMapping("/api")
public class RestfulAPI {
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private BrandRepository brandRepository;
	@Autowired
	private CategoryRepository categoryRepository;
	
	@RequestMapping("/listproduct")
	  List<Product> allproduct() {
	    return (List<Product>) productRepository.findAll();
	  }
	
	@RequestMapping("/new")
	  Product newProduct(@RequestBody Product newProduct) {
	    return productRepository.save(newProduct);
	  }
	
	@RequestMapping("/find/{id}")
	Product one(@PathVariable Integer id) throws Exception {
	    
	    return productRepository.findById(id)
	    	.orElseThrow(() -> new Exception("Product " + id +" not found"));	
	  }
	
	@RequestMapping("/edit/{id}")
	Product replaceEmployee(@RequestBody Product newProduct, @PathVariable Integer id) throws Exception {
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
	
	@RequestMapping("/delete/{id}")
	  void deleteProduct(@PathVariable Integer id) {
		productRepository.deleteById(id);
	  }
	
	@RequestMapping("/listbrand")
	  List<Brand> listbrand() {
	    return (List<Brand>) brandRepository.findAll();
	  }
	
	@RequestMapping("/newbrand")
	  Brand newBrand(@RequestBody Brand newBrand) {
	    return brandRepository.save(newBrand);
	  }
	
	@RequestMapping("/deletebrand/{id}")
	  void deleteBrand(@PathVariable Integer id) {
		brandRepository.deleteById(id);
	  }
	
	@RequestMapping("/listcategory")
	  List<Category> listcategory() {
	    return (List<Category>) categoryRepository.findAll();
	  }
	
	@RequestMapping("/newcategory")
	  Category newCategory(@RequestBody Category newCategory) {
	    return categoryRepository.save(newCategory);
	  }
	
	@RequestMapping("/deletecategory/{id}")
	  void deleteCategory(@PathVariable Integer id) {
		categoryRepository.deleteById(id);
	  }
}

