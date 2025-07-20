package com.trigon.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trigon.entity.Address;
import com.trigon.entity.Cart;
import com.trigon.entity.CartItem;
import com.trigon.entity.Order;
import com.trigon.entity.User;
import com.trigon.exception.OrderException;
import com.trigon.repository.CartRepository;

@Service
public class OrderServiceImpl implements OrderService{

	
	@Autowired
	private CartRepository cartRepo;
	
	@Autowired
	private CartService cartItemService;
	
	@Autowired
	private ProductService productService;
	
	@Override
	public Order findOrderById(Long id) throws OrderException {
		
		return null;
	}

	@Override
	public Order createOrder(User user, Address shippingAddress) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Order> usersOrderHistory(Long userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order confirmOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order placeOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order shippedOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order deliveredOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order canceledOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Order> getAllOrder() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		
	}

}
