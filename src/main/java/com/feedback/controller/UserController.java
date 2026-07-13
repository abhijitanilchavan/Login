package com.feedback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.feedback.dto.LoginUser;
import com.feedback.model.FeedBack;
import com.feedback.model.User;
import com.feedback.service.FeedBackService;
import com.feedback.serviceImp.FeedBackServiceImp;
import com.feedback.serviceImp.UserServiceImp;

@RestController
@CrossOrigin(originPatterns = "http://localhost:52491")
public class UserController {

	@Autowired
	UserServiceImp userServiceImp;
	@Autowired
	FeedBackServiceImp feedBackServiceImp;
	
	@PostMapping("/register")
	public User registerUser(@RequestBody User u) {
		return userServiceImp.addUser(u);
	}
	
	
	@PostMapping("/login")
	public User login(@RequestBody LoginUser log) {
		return userServiceImp.login(log);
	}
	
	
	
	@PostMapping("/feedback")
	public FeedBack addfeedback(@RequestBody FeedBack fb) {
		
		return feedBackServiceImp.addfeedback(fb);
	}
	
	@PutMapping("/update/{id}")
	public FeedBack update(@PathVariable int id,@RequestBody FeedBack fb){
	    return feedBackServiceImp.editFeedBack(id, fb);
	}
	
	@GetMapping("/admin")
	public List<FeedBack> getAllFeedBack(){
		return feedBackServiceImp.allFeedBack();
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable ("id") int id) {
		feedBackServiceImp.delete(id);
	}
	
	@GetMapping("/singlefeed/{id}")
	public FeedBack singlefeed(@PathVariable("id") int id) {
		return feedBackServiceImp.singlefeedback(id);
	}
	
	
	
}
