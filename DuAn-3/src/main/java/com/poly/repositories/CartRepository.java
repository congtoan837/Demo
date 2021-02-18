package com.poly.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.poly.model.Cart;

@Repository
public interface CartRepository extends CrudRepository<Cart, Integer> {

}
