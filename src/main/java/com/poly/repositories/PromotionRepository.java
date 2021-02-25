package com.poly.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.poly.model.Promotion;

@Repository
public interface PromotionRepository extends CrudRepository<Promotion, Integer> {

}
