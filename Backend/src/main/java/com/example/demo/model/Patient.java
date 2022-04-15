package com.example.demo.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Table
@Entity
public class Patient {

	@Id
	@GeneratedValue
	private int p_id;
	@Column(nullable = false)
	private String fname;

	@Column(nullable = false)
	private String address;
	@Column(nullable = false)
	private String email;
	@Column(nullable = false)
	private String password;
	@Column(nullable = false)
	private String contact_no;
	
	@OneToMany(mappedBy = "patient",cascade = CascadeType.ALL)
	List<AppointmentMap> appointment;

	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Patient(int p_id, String fname,  String address, String email, String password,
			String contact_no, List<AppointmentMap> appointment) {
		super();
		this.p_id = p_id;
		this.fname = fname;
	
		this.address = address;
		this.email = email;
		this.password = password;
		this.contact_no = contact_no;
		this.appointment = appointment;
	}
	
	public Patient(int p_id, String fname,  String address, String email, String password,
			String contact_no) {
		super();
		this.p_id = p_id;
		this.fname = fname;
		
		this.address = address;
		this.email = email;
		this.password = password;
		this.contact_no = contact_no;
	}


	public int getP_id() {
		return p_id;
	}

	public void setP_id(int p_id) {
		this.p_id = p_id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}



	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getContact_no() {
		return contact_no;
	}

	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}

	public List<AppointmentMap> getAppointment() {
		return appointment;
	}

	
	public void setAppointment(List<AppointmentMap> appointment) {
		this.appointment = appointment;
	}

	@Override
	public String toString() {
		return "Patient [p_id=" + p_id + ", fname=" + fname + ",  address=" + address + ", email="
				+ email + ", password=" + password + ", contact_no=" + contact_no + ", appointment=" + appointment
				+ "]";
	}
	
	
	
	
	
	
}