package com.poly.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Product")
public class Product implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ProductId;
	@Column(name = "ProductName", length = 50)
	private String ProductName;
	@Column(name = "ProductPrice")
	private int ProductPrice;
	@Column(name = "ProductImage", length = 50)
	private String ProductImage;
	@Column(name = "ProductDescription", length = 200)
	private String ProductDescription;
	@Column(name = "ProductBrand", length = 50)
	private String ProductBrand;
	@Column(name = "ProductQuanlity")
	private int ProductQuanlity;
	@Column(name = "CategoryName", length = 50)
	private String CategoryName;

	public int getProductId() {
		return ProductId;
	}

	public void setProductId(int productId) {
		ProductId = productId;
	}

	public String getProductName() {
		return ProductName;
	}

	public void setProductName(String productName) {
		ProductName = productName;
	}

	public int getProductPrice() {
		return ProductPrice;
	}

	public void setProductPrice(int productPrice) {
		ProductPrice = productPrice;
	}

	public String getProductImage() {
		return ProductImage;
	}

	public void setProductImage(String productImage) {
		ProductImage = productImage;
	}

	public String getProductDescription() {
		return ProductDescription;
	}

	public void setProductDescription(String productDescription) {
		ProductDescription = productDescription;
	}

	public String getProductBrand() {
		return ProductBrand;
	}

	public void setProductBrand(String productBrand) {
		ProductBrand = productBrand;
	}

	public int getProductQuanlity() {
		return ProductQuanlity;
	}

	public void setProductQuanlity(int productQuanlity) {
		ProductQuanlity = productQuanlity;
	}

	public String getCategoryName() {
		return CategoryName;
	}

	public void setCategoryName(String categoryName) {
		CategoryName = categoryName;
	}

}
