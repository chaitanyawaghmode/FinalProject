package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Doctor;
import com.example.demo.service.DoctorService;



@CrossOrigin("*")
@RestController
@RequestMapping("/doctor")
public class DoctorController 
{

	@Autowired
	 private DoctorService doctorservice;
	 
	
	@PostMapping("/dregisteration")
	public Doctor  registerDoctor(@RequestBody   Doctor doctor) throws Exception
	{
		if(doctor == null) {
			 throw new Exception();
		 }
		return doctorservice.registerDoctor(doctor);
	
	}
	
	
	@GetMapping("/dlogin")
	public ResponseEntity<Doctor> loginDoctor(@RequestParam String email,@RequestParam String password)
	{
		return doctorservice.loginUser(email, password);
	}
	
	@PostMapping("/dloginl")
	public ResponseEntity<Doctor> loginDoctor(@RequestBody Doctor doc)
	{
		return doctorservice.loginUser1(doc);
	}
	
	
	@GetMapping("/adoctor")
	public List<Doctor> allDoctor()
	{
		return doctorservice.allDoctor();
	}
	
	@PostMapping("/udoctor")
	public Doctor updateDoctor(@RequestBody  Doctor doctor)
	{
		return doctorservice.updateDoctor(doctor);
	}//Ok
	
	
	@DeleteMapping("/deldoctor/{d_id}")
	public Boolean deleteDoctor(@PathVariable int d_id)
	{
		boolean value=doctorservice.deleteDoctor(d_id);
		if(value==true)
			return true;
		else
			return false;
	}//Ok
	
	@GetMapping("/sdoctor")
	public Doctor singleDoctor(@RequestParam int d_id)
	{
		return doctorservice.singleDoctor(d_id);
	}//Ok
	 
}