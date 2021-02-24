package com.poly.services;

import java.util.List;
import java.util.Optional;

import com.poly.model.Brand;

public interface BrandServiceImpl {

	void deleteAll();

	void deleteAll(List<Brand> entities);

	void delete(Brand entity);

	void deleteById(Integer id);

	long count();

	List<Brand> findAllById(List<Integer> ids);

	Iterable<Brand> findAll();

	boolean existsById(Integer id);

	Optional<Brand> findById(Integer id);

	List<Brand> saveAll(List<Brand> entities);

	Brand save(Brand entity);


}
