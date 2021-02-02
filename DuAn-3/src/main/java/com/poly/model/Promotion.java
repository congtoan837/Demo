package com.poly.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Promotion")
public class Promotion implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int PromotionId;
	@Column(name = "PromotionPercent")
	private int PromotionPercent;
	@Column(name = "PromotionTimeStart")
	private Date PromotionTimeStart;
	@Column(name = "PromotionTimeEnd")
	private Date PromotionTimeEnd;
	@Column(name = "PromotionDescription", length = 500)
	private String PromotionDescription;

	public int getPromotionId() {
		return PromotionId;
	}

	public void setPromotionId(int promotionId) {
		PromotionId = promotionId;
	}

	public int getPromotionPercent() {
		return PromotionPercent;
	}

	public void setPromotionPercent(int promotionPercent) {
		PromotionPercent = promotionPercent;
	}

	public Date getPromotionTimeStart() {
		return PromotionTimeStart;
	}

	public void setPromotionTimeStart(Date promotionTimeStart) {
		PromotionTimeStart = promotionTimeStart;
	}

	public Date getPromotionTimeEnd() {
		return PromotionTimeEnd;
	}

	public void setPromotionTimeEnd(Date promotionTimeEnd) {
		PromotionTimeEnd = promotionTimeEnd;
	}

	public String getPromotionDescription() {
		return PromotionDescription;
	}

	public void setPromotionDescription(String promotionDescription) {
		PromotionDescription = promotionDescription;
	}

}
