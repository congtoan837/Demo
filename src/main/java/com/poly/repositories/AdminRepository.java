package com.poly.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.poly.model.Admins;

@Repository
public interface AdminRepository extends CrudRepository<Admins, Long> {
	
	@Query("SELECT a FROM Admins a WHERE a.Name = :username" )
	public Admins getByName(@Param("username") String username);
}
