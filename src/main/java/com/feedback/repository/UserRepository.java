package com.feedback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.feedback.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
public abstract User findByUsernameAndPassword(String username,String password);
}
