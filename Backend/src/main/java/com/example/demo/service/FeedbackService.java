package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Feedback;
import com.example.demo.repo.FeedbackMapRepo;
import com.example.demo.repo.FeedbackRepo;

@Service
public class FeedbackService {

	@Autowired
	private FeedbackRepo frepo;
	
	@Autowired
	private FeedbackMapRepo fmrepo;
	
	public Feedback addFeedback(Feedback f)
	{
		return frepo.save(f);
	}
	
	public List<Feedback> getFeedback(int d_id)
	{
		return fmrepo.getFeedback(d_id);
	}
	
}
