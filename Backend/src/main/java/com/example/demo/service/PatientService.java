package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.model.Appointment;
import com.example.demo.model.Doctor;
import com.example.demo.model.Patient;
import com.example.demo.repo.ApplicationMapRepo;
import com.example.demo.repo.PatientRepo;

@Service
public class PatientService {

	@Autowired
	private PatientRepo prepo;
	
	@Autowired
	private ApplicationMapRepo arepo;
	
	public Patient registerPatient(Patient p)
	{
		return prepo.save(p);
	}
	
	public ResponseEntity<Patient> loginUser(String email, String password) 
	{
		Patient usr = prepo.findByEmail(email);
		
		if(email.equals(usr.getEmail()) && password.equals(usr.getPassword())) {
			return new ResponseEntity<Patient>(usr,HttpStatus.ACCEPTED);
		}
		
		return new ResponseEntity<>(HttpStatus.FORBIDDEN);
	}
	
	
	public ResponseEntity<Patient> loginUser1(Patient user) {
		Patient usr = prepo.findByEmail(user.getEmail());
		
		if(user.getEmail().equals(usr.getEmail()) && user.getPassword().equals(usr.getPassword())) {
			return new ResponseEntity<Patient>(usr,HttpStatus.ACCEPTED);
		}
		
		return new ResponseEntity<>(HttpStatus.FORBIDDEN);
	}
	
	public Patient updatePatient(Patient patient) {
		// TODO Auto-generated method stub
		Patient existingpatient;
		existingpatient=prepo.findById(patient.getP_id()).orElse(null);
		existingpatient.setFname(patient.getFname());	
		existingpatient.setEmail(patient.getEmail());
		existingpatient.setPassword(patient.getPassword());
		existingpatient.setContact_no(patient.getContact_no());
		existingpatient.setAddress(patient.getAddress());
		
		return prepo.save(existingpatient);
	}



	public boolean deletePatient(int p_id) {
		// TODO Auto-generated method stub
		
		prepo.deleteById(p_id);
		return true;
		
	}


	public Patient singlePatient(int p_id) {
		// TODO Auto-generated method stub
		return prepo.findById(p_id).orElse(null);
	}


	public List<Patient> allPatient() {
		// TODO Auto-generated method stub
		return prepo.findAll();
	}

	
	
	
}
