package com.example.demo.repo;



import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.demo.model.Doctor;

@Transactional

@Repository
public interface DoctorRepo extends JpaRepository<Doctor, Integer> 
{

	public  Doctor findByEmail(String email);
	
	
}