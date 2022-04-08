package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Doctor;


public interface AppointmentDRepo extends JpaRepository<Doctor, Integer> {

	@Query(value="select *from doctor,appointment where doctor.d_id=appointment.d_id and appointment.p_id=?",nativeQuery=true)
	public List<Doctor> getBApointment(int p_id);
}
