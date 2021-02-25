package com.poly.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Customer")
public class Customer implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer Id;
	@Column(name = "Name")
    private String Name;
	@Column(name = "Email")
    private String Email;
	@Column(name = "Phone")
    private String Phone;
	@Column(name = "Address")
    private String Address;
	@Column(name = "Password")
    private String Password;
	@Column(name = "Image")
    private String Image;
	@Column(name = "Status")
    private String Status;
	
	
	public Customer() {
		super();
	}

	public Customer(Integer id, String name, String email, String phone, String address, String password, String image,
			String status) {
		super();
		Id = id;
		Name = name;
		Email = email;
		Phone = phone;
		Address = address;
		Password = password;
		Image = image;
		Status = status;
	}
	
	public Integer getId() {
		return Id;
	}

	public void setId(Integer id) {
		Id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getPhone() {
		return Phone;
	}

	public void setPhone(String phone) {
		Phone = phone;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public String getImage() {
		return Image;
	}

	public void setImage(String image) {
		Image = image;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}
}
