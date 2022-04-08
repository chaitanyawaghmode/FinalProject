package com.example.demo.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Appointment;
import com.example.demo.model.Doctor;
import com.example.demo.model.Patient;
import com.example.demo.repo.ApplicationMapRepo;
import com.example.demo.repo.AppointmentDRepo;
import com.example.demo.repo.AppointmentRepo;


@Service
public class AppointmentService
{
		@Autowired
		 AppointmentRepo appointmentrepo ;
		
		@Autowired
		 ApplicationMapRepo arepo;
		
		@Autowired
		 AppointmentDRepo arepo2;
		
	

		public Appointment registerAppointment(Appointment app) 
		{
			
			return appointmentrepo.save(app);			
		}

		
		
		public Appointment singleAppointmentP(int ap_id)
		{
			return appointmentrepo.getAppointment(ap_id);
		}
		
		public List<Patient> appoint(int d_id)
		{
			return arepo.appoint(d_id);
		}
		
		public List<Doctor> getBApointment(int p_id)
		{
			return arepo2.getBApointment(p_id);
		}



		public Appointment updateAppointment(Appointment app)
		{
			Appointment existingapp;			
			existingapp=appointmentrepo .findById(app.getAp_id()).orElse(null);
			existingapp.setStatus(app.getStatus());
			
			return appointmentrepo.save(existingapp) ;

		}
		
//		public List<Patient> appoint()
//		{
//			return arepo.appoint();
//		}
}