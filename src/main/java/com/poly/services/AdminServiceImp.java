package com.poly.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.poly.model.Admins;
import com.poly.repositories.AdminRepository;

@Service
public class AdminServiceImp implements UserDetailsService {

	@Autowired
	private AdminRepository adminRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Admins admins = adminRepository.getByName(username);
		
		if(admins == null) {
			throw new UsernameNotFoundException("Could not find Admin");
		}
		
		return new AdminService(admins);
	}

}
