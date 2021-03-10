package com.poly.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.poly.services.AdminServiceImp;
import com.poly.services.CustomerServiceImp;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	AdminServiceImp adminServiceImp;
	@Autowired
	CustomerServiceImp customerServiceImp;
	
	@Bean
	PasswordEncoder PasswordEncoder() {		
		return new BCryptPasswordEncoder();
	}
	
    @Override
    protected void configure(AuthenticationManagerBuilder auth)
            throws Exception {
        auth.userDetailsService(adminServiceImp)
            .passwordEncoder(new MyPasswordEncoder());
        auth.userDetailsService(customerServiceImp)
        .passwordEncoder(new MyPasswordEncoder());
        auth.inMemoryAuthentication()
		.withUser("admin").password(PasswordEncoder().encode("admin123")).authorities("ADMIN");     
    }	
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.csrf().disable()
			.authorizeRequests()
			.antMatchers("/css/**", "/js/**", "/images/**", "/webfonts/**").permitAll()
			.antMatchers("/admin/**").hasAuthority("ADMIN")
			.and()
			.formLogin()
			.and()
			.logout().logoutRequestMatcher(new AntPathRequestMatcher("/admin/logout")).logoutSuccessUrl("/admin")
			.and()
			.httpBasic();	
		
	}
}
