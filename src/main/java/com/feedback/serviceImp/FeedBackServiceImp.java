package com.feedback.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.feedback.model.FeedBack;
import com.feedback.repository.FeedBackReository;
import com.feedback.service.FeedBackService;

@Service
public class FeedBackServiceImp  implements FeedBackService{

	@Autowired
FeedBackReository backReository;
	
	@Override
	public FeedBack addfeedback(FeedBack fb) {
		// TODO Auto-generated method stub
		return backReository.save(fb);
	}

	@Override
	public FeedBack editFeedBack(int id, FeedBack fb) {
		FeedBack fback=backReository.findById(id);
		fback.setFeedback(fb.getFeedback());
		return  backReository.save(fback);
	}

	@Override
	public List<FeedBack> allFeedBack() {
		// TODO Auto-generated method stub
		return backReository.findAll();
	}

	@Override
	public void delete(int id) {
		backReository.deleteById(id);
		
	}

	@Override
	public FeedBack singlefeedback(int id) {
		// TODO Auto-generated method stub
		return backReository.findById(id);
	}

}
