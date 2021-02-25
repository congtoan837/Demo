package com.poly.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.poly.model.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Integer> {

}
