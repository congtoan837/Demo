package com.poly.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Payment")
public class Payment implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int PaymentId;
	@Column(name = "PaymentName", length = 50)
	private String PaymentName;
	@Column(name = "PayDescription", length = 50)
	private String PayDescription;

	public int getPaymentId() {
		return PaymentId;
	}

	public void setPaymentId(int paymentId) {
		PaymentId = paymentId;
	}

	public String getPaymentName() {
		return PaymentName;
	}

	public void setPaymentName(String paymentName) {
		PaymentName = paymentName;
	}

	public String getPayDescription() {
		return PayDescription;
	}

	public void setPayDescription(String payDescription) {
		PayDescription = payDescription;
	}

}
