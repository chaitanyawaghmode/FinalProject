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
public class Doctor {

	@Id
	@GeneratedValue
	private int d_id;
	@Column(nullable = false)
	private String fname;
	@Column(nullable = false)
	private String lname;
	@Column(nullable = false)
	private String contact_no;
	@Column(nullable = false)
	private String address;
	@Column(nullable = false)
	private String email;
	@Column(nullable = false)
	private String password;
	@Column(nullable = false)
	private String experience;
	@Column(nullable = false)
	private String specalization;
	
	@OneToMany(mappedBy = "doctor",cascade = CascadeType.ALL)
	List<AppointmentMap> appointment;
	
	
	public Doctor() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Doctor(int d_id, String fname, String lname, String contact_no, String address, String email,
			String password, String experience, String specalization) {
		super();
		this.d_id = d_id;
		this.fname = fname;
		this.lname = lname;
		this.contact_no = contact_no;
		this.address = address;
		this.email = email;
		this.password = password;
		this.experience = experience;
		this.specalization = specalization;
	}
	
	
	
	public Doctor(int d_id, String fname, String lname, String contact_no, String address, String email,
			String password, String experience, String specalization, List<AppointmentMap> appointment) {
		super();
		this.d_id = d_id;
		this.fname = fname;
		this.lname = lname;
		this.contact_no = contact_no;
		this.address = address;
		this.email = email;
		this.password = password;
		this.experience = experience;
		this.specalization = specalization;
		this.appointment = appointment;
	}
	
	
	public int getD_id() {
		return d_id;
	}
	public void setD_id(int d_id) {
		this.d_id = d_id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getContact_no() {
		return contact_no;
	}
	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
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
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public String getSpecalization() {
		return specalization;
	}
	public void setSpecalization(String specalization) {
		this.specalization = specalization;
	}
	
	
	
	public List<AppointmentMap> getAppointment() {
		return appointment;
	}
	public void setAppointment(List<AppointmentMap> appointment) {
		this.appointment = appointment;
	}
	@Override
	public String toString() {
		return "Doctor [d_id=" + d_id + ", fname=" + fname + ", lname=" + lname + ", contact_no=" + contact_no
				+ ", address=" + address + ", email=" + email + ", password=" + password + ", experience=" + experience
				+ ", specalization=" + specalization + ", appointment=" + appointment + "]";
	}

	
	
	

	
	
}