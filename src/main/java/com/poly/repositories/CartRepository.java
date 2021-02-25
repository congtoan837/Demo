package com.poly.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.poly.model.Cart;
import com.poly.model.Customer;

@Repository
public interface CartRepository extends CrudRepository<Cart, Integer> {
	
	@Query("select c.Id as id, c.Product_Id, c.Quantity, cus.Id from Cart as c inner join com.poly.model.Customer as cus on c.Customer_Id = cus.Id")
	List<String> fetchEmpDeptDataInnerJoin();

}
