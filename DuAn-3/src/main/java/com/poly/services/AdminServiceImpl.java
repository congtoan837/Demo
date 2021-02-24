package com.poly.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.poly.model.Admins;
import com.poly.repositories.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminRepository adminRepository;
	
	@Override
	public Admins save(Admins entity) {
		return adminRepository.save(entity);
	}

	@Override
	public List<Admins> saveAll(List<Admins> entities) {
		return (List<Admins>) adminRepository.saveAll(entities);
	}

	@Override
	public Optional<Admins> findById(Integer id) {
		return adminRepository.findById(id);
	}

	@Override
	public boolean existsById(Integer id) {
		return adminRepository.existsById(id);
	}

	@Override
	public Iterable<Admins> findAll() {
		return adminRepository.findAll();
	}

	@Override
	public List<Admins> findAllById(List<Integer> ids) {
		return (List<Admins>) adminRepository.findAllById(ids);
	}

	@Override
	public long count() {
		return adminRepository.count();
	}

	@Override
	public void deleteById(Integer id) {
		adminRepository.deleteById(id);
	}

	@Override
	public void delete(Admins entity) {
		adminRepository.delete(entity);
	}

	@Override
	public void deleteAll(List<Admins> entities) {
		adminRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		adminRepository.deleteAll();
	}

	
	
	
	
}
