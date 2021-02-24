package com.poly.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.poly.model.Customer;
import com.poly.repositories.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {
	@Autowired
	private CustomerRepository customerRepository;
	
	@Override
	public Customer save(Customer entity) {
		return customerRepository.save(entity);
	}

	@Override
	public List<Customer> saveAll(List<Customer> entities) {
		return (List<Customer>) customerRepository.saveAll(entities);
	}

	@Override
	public Optional<Customer> findById(Integer id) {
		return customerRepository.findById(id);
	}

	@Override
	public boolean existsById(Integer id) {
		return customerRepository.existsById(id);
	}

	@Override
	public Iterable<Customer> findAll() {
		return customerRepository.findAll();
	}

	@Override
	public List<Customer> findAllById(List<Integer> ids) {
		return (List<Customer>) customerRepository.findAllById(ids);
	}

	@Override
	public long count() {
		return customerRepository.count();
	}

	@Override
	public void deleteById(Integer id) {
		customerRepository.deleteById(id);
	}

	@Override
	public void delete(Customer entity) {
		customerRepository.delete(entity);
	}

	@Override
	public void deleteAll(List<Customer> entities) {
		customerRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		customerRepository.deleteAll();
	}

	
	
	
	
}
