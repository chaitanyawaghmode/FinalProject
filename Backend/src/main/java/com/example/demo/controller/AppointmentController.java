package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.example.demo.model.Appointment;
import com.example.demo.model.Doctor;
import com.example.demo.model.Patient;
import com.example.demo.service.AppointmentService;

@CrossOrigin("*")
@RestController()
@RequestMapping("/appointment")
public class AppointmentController
{
	@Autowired
	private AppointmentService  appointmentservice;
	

	@PostMapping("/rapp")
	public Appointment regsiterAppointment(@RequestBody Appointment app)
	{
		return appointmentservice.registerAppointment(app);
	}//Ok
	
	@PutMapping("/uapp")
	public  Appointment updateAppointment(@RequestBody  Appointment app)
	{
		return appointmentservice.updateAppointment(app);
	}//Ok
	
	@GetMapping("/gapp")
	public Appointment getAppointment(@RequestParam int ap_id)
	{
		return appointmentservice.singleAppointmentP(ap_id);
	}
	

	@GetMapping("/appoint")
	public List<Patient> appoint(@RequestParam int d_id)
	{
		return appointmentservice.appoint(d_id);
	}
	
	@GetMapping("/dappoint")
	public List<Doctor> getBApointment(@RequestParam int p_id)
	{
		return appointmentservice.getBApointment(p_id);
	}
	

//	@GetMapping("/appoint")
//	public List<Patient> appoint()
//	{
//		return appointmentservice.appoint();
//	}

//	@DeleteMapping("/delapp/{d_id}")
//	public Boolean deleteAppointment(@PathVariable Doctor d_id)
//	{
//		boolean value=appointmentservice.deleteAppointment(d_id);
//		if(value==true)
//			return true;
//		else
//			return false;
//	}//Ok
	
	

}