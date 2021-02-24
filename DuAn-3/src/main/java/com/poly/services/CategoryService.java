package com.poly.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.poly.model.Category;
import com.poly.repositories.CategoryRepository;

@Service
public class CategoryService implements CategoryServiceImpl {
	@Autowired
	CategoryRepository CategoryRepository;
	
	@Override
	public Category save(Category entity) {
		return CategoryRepository.save(entity);
	}

	@Override
	public List<Category> saveAll(List<Category> entities) {
		return (List<Category>) CategoryRepository.saveAll(entities);
	}

	@Override
	public Optional<Category> findById(Integer id) {
		return CategoryRepository.findById(id);
	}

	@Override
	public boolean existsById(Integer id) {
		return CategoryRepository.existsById(id);
	}

	@Override
	public Iterable<Category> findAll() {
		return CategoryRepository.findAll();
	}

	@Override
	public List<Category> findAllById(List<Integer> ids) {
		return (List<Category>) CategoryRepository.findAllById(ids);
	}

	@Override
	public long count() {
		return CategoryRepository.count();
	}

	@Override
	public void deleteById(Integer id) {
		CategoryRepository.deleteById(id);
	}

	@Override
	public void delete(Category entity) {
		CategoryRepository.delete(entity);
	}

	@Override
	public void deleteAll(List<Category> entities) {
		CategoryRepository.deleteAll(entities);
	}

	@Override
	public void deleteAll() {
		CategoryRepository.deleteAll();
	}

	
	
	
	
}
