package com.poly.security;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth	
			.inMemoryAuthentication()
			.withUser("admin").password(PasswordEncoder().encode("admin123")).roles("ADMIN")
			.and()
			.withUser("user").password(PasswordEncoder().encode("user123")).roles("USER");
	}
	
	@Bean
	PasswordEncoder PasswordEncoder() {		
		return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.authorizeRequests()
			.antMatchers("/css/**", "/js/**", "/images/**", "/webfonts/**").permitAll()
			.antMatchers("/admin/**").hasRole("ADMIN")
			.and()
			.httpBasic();
	}
}
