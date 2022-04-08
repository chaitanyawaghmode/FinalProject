package com.example.demo.repo;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Appointment;


public interface AppointmentRepo extends JpaRepository<Appointment, Integer> {

	void deleteById(int d_id);

	@Query(value="select *from appointment where appointment.ap_id=?",nativeQuery=true)
	public Appointment getAppointment(int ap_id);
	

}