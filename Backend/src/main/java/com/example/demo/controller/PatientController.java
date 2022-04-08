package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Doctor;
import com.example.demo.model.Patient;
import com.example.demo.service.PatientService;

@CrossOrigin("*")


@RestController
@RequestMapping("/patient")
public class PatientController {

	@Autowired
	private PatientService pservice;
	
	@PostMapping("/pregister")
	public Patient registerPatient(@RequestBody Patient p) throws Exception
	{
		if(p==null)
		{
			throw new Exception();
		}
		return pservice.registerPatient(p);
	}
	
	@GetMapping("/plogin")
	public ResponseEntity<Patient> loginPatient(@RequestParam String email,@RequestParam String password)
	{
		return pservice.loginUser(email, password);
	}
	
	@PostMapping("/ploginl")
	public ResponseEntity<Patient> loginPatient(@RequestBody Patient p)
	{
		return pservice.loginUser1(p);
	}
	
	@PostMapping("/upatient")
	public Patient updatePatient(@RequestBody Patient patient) 
	{
		
		return pservice.updatePatient(patient);
	}//Ok
	
	@DeleteMapping("/delpatient/{p_id}")
	public Boolean deletePatient(@PathVariable int p_id)
	{
		boolean value=pservice.deletePatient(p_id);
		if(value==true)
			return true;
		else
			return false;
	}//Ok
	
	@GetMapping("/spatient")
	public Patient singlePatient(@RequestParam int p_id)
	{
		return pservice.singlePatient(p_id);
	}//Ok
	
	@GetMapping("/apatient")
	public List<Patient> allPatient()
	{
		return pservice.allPatient();
	}//Ok
	

}
	

	


