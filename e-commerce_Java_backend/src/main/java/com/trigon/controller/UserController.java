package com.trigon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trigon.entity.User;
import com.trigon.exception.UserException;
import com.trigon.service.UserService;

@RestController
@RequestMapping("a/api/users")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/profile")
	public ResponseEntity<User> getUserProfileHandler(@RequestHeader("Authorization") String jwt) throws UserException{
		User user=userService.findUserProfileByjwt(jwt);
		return new ResponseEntity<User>(user,HttpStatus.ACCEPTED);
	}
}
