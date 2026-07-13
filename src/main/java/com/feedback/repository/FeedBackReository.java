package com.feedback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.feedback.model.FeedBack;

@Repository
public interface FeedBackReository extends JpaRepository<FeedBack, Integer> {
	public abstract FeedBack findById(int id);

}
