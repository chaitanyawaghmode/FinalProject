package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Appointment;
import com.example.demo.model.AppointmentMap;
import com.example.demo.model.Patient;


public interface ApplicationMapRepo extends JpaRepository<Patient, Integer>
{
	@Query(value="select * from patient,appointment where patient.p_id = appointment.p_id and appointment.d_id=?",nativeQuery=true)	
	List<Patient> appoint(int d_id);
	
//	@Query(value="select a from patient a where a.appointment is not EMPTY")
//	List<Patient> appoint();
//	
	
//	@Query(value="select *from patient,appointment where  appointment.p_id = patient.p_id ",nativeQuery=true)
//	List<Patient> appoint();
	
	
	

}