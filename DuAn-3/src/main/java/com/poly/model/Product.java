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
	private int Id;
	@Column(name = "Name", length = 50)
	private String Name;
	@Column(name = "Price")
	private int Price;
	@Column(name = "Image", length = 50)
	private String Image;
	@Column(name = "Description", length = 200)
	private String Description;
	@Column(name = "Status", length = 50)
	private String Status;
	@Column(name = "Brand", length = 50)
	private String Brand;
	@Column(name = "Quantity")
	private int Quantity;
	@Column(name = "Category", length = 50)
	private String Category;
	
	public Product() {
		super();
	}
	
	public Product(int id, String name, int price, String image, String description, String status, String brand,
			int quantity, String category) {
		super();
		Id = id;
		Name = name;
		Price = price;
		Image = image;
		Description = description;
		Status = status;
		Brand = brand;
		Quantity = quantity;
		Category = category;
	}
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public int getPrice() {
		return Price;
	}
	public void setPrice(int price) {
		Price = price;
	}
	public String getImage() {
		return Image;
	}
	public void setImage(String image) {
		Image = image;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public String getStatus() {
		return Status;
	}
	public void setStatus(String status) {
		Status = status;
	}
	public String getBrand() {
		return Brand;
	}
	public void setBrand(String brand) {
		Brand = brand;
	}
	public int getQuantity() {
		return Quantity;
	}
	public void setQuantity(int quantity) {
		Quantity = quantity;
	}
	public String getCategory() {
		return Category;
	}
	public void setCategory(String category) {
		Category = category;
	}
}
