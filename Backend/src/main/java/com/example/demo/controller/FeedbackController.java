package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Feedback;
import com.example.demo.service.FeedbackService;

@CrossOrigin("*")
@RestController
@RequestMapping("/feedback")
public class FeedbackController {

	@Autowired
	private FeedbackService fservice;
	
	@PostMapping("/gfeedback")
	public Feedback addFeedback(@RequestBody Feedback f)
	{
		return fservice.addFeedback(f);
	}
	
	@GetMapping("/sfeedback")
	public List<Feedback> getFeedback(@RequestParam int d_id)
	{
		return fservice.getFeedback(d_id);
	}
}
