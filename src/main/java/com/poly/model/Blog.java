package com.poly.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Blog")
public class Blog implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;
	@Column(name = "Title")
    private String Title;
	@Column(name = "Image")
    private String Image;
	@Column(name = "Content")
    private String Content;
	@Column(name = "Description")
    private String Description;
	@Column(name = "CreateBy")
    private String CreateBy;
	
	public Blog() {
		super();
	}	

	public Blog(int id, String title, String image, String content, String description, String createBy) {
		super();
		Id = id;
		Title = title;
		Image = image;
		Content = content;
		Description = description;
		CreateBy = createBy;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getTitle() {
		return Title;
	}

	public void setTitle(String title) {
		Title = title;
	}

	public String getImage() {
		return Image;
	}

	public void setImage(String image) {
		Image = image;
	}

	public String getContent() {
		return Content;
	}

	public void setContent(String content) {
		Content = content;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	public String getCreateBy() {
		return CreateBy;
	}

	public void setCreateBy(String createBy) {
		CreateBy = createBy;
	}
}
