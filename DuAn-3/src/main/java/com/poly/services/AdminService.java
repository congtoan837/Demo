package com.poly.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.poly.model.Admins;
import com.poly.repositories.AdminRepository;

public interface AdminService {

	void deleteAll();

	void deleteAll(List<Admins> entities);

	void delete(Admins entity);

	void deleteById(Integer id);

	long count();

	List<Admins> findAllById(List<Integer> ids);

	Iterable<Admins> findAll();

	boolean existsById(Integer id);

	Optional<Admins> findById(Integer id);

	List<Admins> saveAll(List<Admins> entities);

	Admins save(Admins entity);

}
