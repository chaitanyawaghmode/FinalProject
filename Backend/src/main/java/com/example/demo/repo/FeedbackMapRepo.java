package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Feedback;

public interface FeedbackMapRepo extends JpaRepository<Feedback, Integer> 
{
	@Query(value = "select *from feedback where d_id=?",nativeQuery=true)
	public List<Feedback> getFeedback(int d_id);
}
