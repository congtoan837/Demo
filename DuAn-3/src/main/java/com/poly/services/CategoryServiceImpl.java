package com.poly.services;

import java.util.List;
import java.util.Optional;

import com.poly.model.Category;

public interface CategoryServiceImpl {

	void deleteAll();

	void deleteAll(List<Category> entities);

	void delete(Category entity);

	void deleteById(Integer id);

	long count();

	List<Category> findAllById(List<Integer> ids);

	Iterable<Category> findAll();

	boolean existsById(Integer id);

	Optional<Category> findById(Integer id);

	List<Category> saveAll(List<Category> entities);

	Category save(Category entity);


}
