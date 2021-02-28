package com.poly.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.poly.model.Customer;
import com.poly.repositories.CustomerRepository;

@Service
public class CustomerServiceImp implements UserDetailsService {

	@Autowired
	private CustomerRepository customerRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Customer customer = customerRepository.getByPhone(username);
		
		if(customer == null) {
			throw new UsernameNotFoundException("Could not find Customer");
		}
		
		return new CustomerService(customer);
	}

}
