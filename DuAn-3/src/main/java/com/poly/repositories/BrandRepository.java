package com.poly.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.poly.model.Brand;

@Repository
public interface BrandRepository extends CrudRepository<Brand, Integer> {

}
