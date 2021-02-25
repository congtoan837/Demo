package com.poly.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.poly.model.Admins;

@Repository
public interface AdminRepository extends CrudRepository<Admins, Integer> {

}
