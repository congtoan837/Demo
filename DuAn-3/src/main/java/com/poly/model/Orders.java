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
@Table(name = "Orders")
public class Orders implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int OrdersId;
	@Column(name = "OrderDate")
	private Date OrderDate;
	@Column(name = "OrderDetailsId")
	private int OrderDetailsId;
	@Column(name = "CustomerId")
	private int CustomerId;

	public int getOrdersId() {
		return OrdersId;
	}

	public void setOrdersId(int ordersId) {
		OrdersId = ordersId;
	}

	public Date getOrderDate() {
		return OrderDate;
	}

	public void setOrderDate(Date orderDate) {
		OrderDate = orderDate;
	}

	public int getOrderDetailsId() {
		return OrderDetailsId;
	}

	public void setOrderDetailsId(int orderDetailsId) {
		OrderDetailsId = orderDetailsId;
	}

	public int getCustomerId() {
		return CustomerId;
	}

	public void setCustomerId(int customerId) {
		CustomerId = customerId;
	}

}
