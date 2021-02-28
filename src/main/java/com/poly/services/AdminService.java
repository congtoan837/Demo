package com.poly.services;

import java.util.Arrays;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.poly.model.Admins;

public class AdminService implements UserDetails {
	
	private Admins admins;		
	
	public AdminService(Admins admins) {
		super();
		this.admins = admins;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ADMIN");
		return Arrays.asList(authority);
	}

	@Override
	public String getPassword() {
		return admins.getPassword();
	}

	@Override
	public String getUsername() {
		return admins.getName();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
