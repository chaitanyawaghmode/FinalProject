package com.example.demo.model;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name="appointment")
public class AppointmentMap {

	@Id
	@GeneratedValue
	private int ap_id ;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="p_id")
	@JsonProperty(access = Access.WRITE_ONLY)
	Patient patient;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="d_id")
	@JsonProperty(access = Access.WRITE_ONLY)
	Doctor doctor;
	
	@Column
	private Date date;
	
	@Column
	private String time;
	
	@Column
	private String status = "pending";

	public AppointmentMap() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AppointmentMap(int ap_id, Patient patient, Doctor doctor, Date date, String time, String status) {
		super();
		this.ap_id = ap_id;
		this.patient = patient;
		this.doctor = doctor;
		this.date = date;
		this.time = time;
		this.status = status;
	}

	public int getAp_id() {
		return ap_id;
	}

	public void setAp_id(int ap_id) {
		this.ap_id = ap_id;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "AppointmentMap [ap_id=" + ap_id + ", patient=" + patient + ", doctor=" + doctor + ", date=" + date
				+ ", time=" + time + ", status=" + status + "]";
	}

	
	

	
	
	
	
}