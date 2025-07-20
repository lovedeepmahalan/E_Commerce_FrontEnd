package com.trigon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.trigon.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Long>{

	@Query("select c from Cart c where c.user.id=:userId")
	public Cart findByUserId(Long userId);
}
