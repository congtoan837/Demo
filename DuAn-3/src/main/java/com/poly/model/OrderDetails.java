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
@Table(name = "OrderDetails")
public class OrderDetails implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int OrderDetailsId;
	@Column(name = "OrderDate")
	private Date OrderDate;
	@Column(name = "OrderProductName")
	private String OrderProductName;
	@Column(name = "OrderQuanlity")
	private int OrderQuanlity;
	@Column(name = "OrderTotalPrice")
	private int OrderTotalPrice;
	@Column(name = "ProductId")
	private int ProductId;
	@Column(name = "OrderId")
	private int OrderID;
	@Column(name = "OrderStatus")
	private String OrderStatus;
	@Column(name = "PaymentId")
	private int PaymentId;

	public int getOrderDetailsId() {
		return OrderDetailsId;
	}

	public void setOrderDetailsId(int orderDetailsId) {
		OrderDetailsId = orderDetailsId;
	}

	public Date getOrderDate() {
		return OrderDate;
	}

	public void setOrderDate(Date orderDate) {
		OrderDate = orderDate;
	}

	public String getOrderProductName() {
		return OrderProductName;
	}

	public void setOrderProductName(String orderProductName) {
		OrderProductName = orderProductName;
	}

	public int getOrderQuanlity() {
		return OrderQuanlity;
	}

	public void setOrderQuanlity(int orderQuanlity) {
		OrderQuanlity = orderQuanlity;
	}

	public int getOrderTotalPrice() {
		return OrderTotalPrice;
	}

	public void setOrderTotalPrice(int orderTotalPrice) {
		OrderTotalPrice = orderTotalPrice;
	}

	public int getProductId() {
		return ProductId;
	}

	public void setProductId(int productId) {
		ProductId = productId;
	}

	public int getOrderID() {
		return OrderID;
	}

	public void setOrderID(int orderID) {
		OrderID = orderID;
	}

	public String getOrderStatus() {
		return OrderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		OrderStatus = orderStatus;
	}

	public int getPaymentId() {
		return PaymentId;
	}

	public void setPaymentId(int paymentId) {
		PaymentId = paymentId;
	}

}
