package com.example.demo.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.model.Doctor;
import com.example.demo.repo.DoctorRepo;
@Service
public class DoctorService
{
	@Autowired
	private DoctorRepo doctorrepo;

	public Doctor registerDoctor(Doctor doctor) 
	{		
			return doctorrepo.save(doctor);
	}


	public ResponseEntity<Doctor> loginUser(String email, String password) 
	{
		Doctor usr = doctorrepo.findByEmail(email);
		
		if(email.equals(usr.getEmail()) && password.equals(usr.getPassword())) {
			return new ResponseEntity<Doctor>(usr,HttpStatus.ACCEPTED);
		}
		
		return new ResponseEntity<>(HttpStatus.FORBIDDEN);
	}
	
	
	public ResponseEntity<Doctor> loginUser1(Doctor user) {
		Doctor usr = doctorrepo.findByEmail(user.getEmail());
		
		if(user.getEmail().equals(usr.getEmail()) && user.getPassword().equals(usr.getPassword())) {
			return new ResponseEntity<Doctor>(usr,HttpStatus.ACCEPTED);
		}
		
		return new ResponseEntity<>(HttpStatus.FORBIDDEN);
	}
	
	public java.util.List<Doctor> allDoctor() {
		// TODO Auto-generated method stub
		return doctorrepo.findAll();
	}
	
	//update
		public Doctor updateDoctor(Doctor doctor) {
			// TODO Auto-generated method stub
			Doctor existingdoctor;
			existingdoctor=doctorrepo.findById(doctor.getD_id()).orElse(null);
			existingdoctor.setFname(doctor.getFname());
			existingdoctor.setLname(doctor.getLname());
			existingdoctor.setEmail(doctor.getEmail());
			existingdoctor.setPassword(doctor .getPassword());
			existingdoctor.setAddress(doctor.getAddress());
			existingdoctor.setContact_no(doctor.getContact_no());
			existingdoctor.setSpecalization(doctor.getSpecalization());
			existingdoctor.setExperience(doctor.getExperience());
			
			return doctorrepo.save(existingdoctor);
		}


		public boolean deleteDoctor(int d_id) {
			// TODO Auto-generated method stub
			
			doctorrepo.deleteById(d_id);
			return true;
			
		}


		public Doctor singleDoctor(int d_id) {
			// TODO Auto-generated method stub
			return doctorrepo.findById(d_id).orElse(null);
		}

	
	

}