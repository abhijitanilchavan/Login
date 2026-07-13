package com.feedback.service;

import java.util.List;

import com.feedback.model.FeedBack;

public interface FeedBackService {
	public abstract FeedBack addfeedback(FeedBack fb);
	public abstract FeedBack editFeedBack(int id,FeedBack fb);
    public List<FeedBack> allFeedBack();
    public void delete(int id);
    public abstract FeedBack singlefeedback(int id);
    
}
