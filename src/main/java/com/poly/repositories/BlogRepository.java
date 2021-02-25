package com.poly.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.poly.model.Blog;

@Repository
public interface BlogRepository extends CrudRepository<Blog, Integer> {

}
