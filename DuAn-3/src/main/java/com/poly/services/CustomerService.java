package com.poly.services;

import java.util.List;
import java.util.Optional;

import com.poly.model.Customer;

public interface CustomerService {

	void deleteAll();

	void deleteAll(List<Customer> entities);

	void delete(Customer entity);

	void deleteById(Integer id);

	long count();

	List<Customer> findAllById(List<Integer> ids);

	Iterable<Customer> findAll();

	boolean existsById(Integer id);

	Optional<Customer> findById(Integer id);

	List<Customer> saveAll(List<Customer> entities);

	Customer save(Customer entity);


}
