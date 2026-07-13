package com.feedback.service;

import com.feedback.dto.LoginUser;
import com.feedback.model.User;

public interface UserService {
public abstract User addUser(User u);
public abstract User login(LoginUser login);
}
