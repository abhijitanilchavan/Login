package com.feedback.serviceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.feedback.dto.LoginUser;
import com.feedback.model.User;
import com.feedback.repository.UserRepository;
import com.feedback.service.UserService;

@Service
public class UserServiceImp implements UserService {
	
	@Autowired
	UserRepository repository;

	@Override
	public User addUser(User u) {
		// TODO Auto-generated method stub
		return repository.save(u);
	}

	@Override
	public User login(LoginUser login) {
		
		return repository.findByUsernameAndPassword(login.getUsername(),login.getPassword());
	}
	

}
