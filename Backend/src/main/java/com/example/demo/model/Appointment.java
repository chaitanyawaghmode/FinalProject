package com.example.demo.model;

import java.util.Date;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

@Table
@Entity(name="appointment")
public class Appointment {

	@Id
	@GeneratedValue
	private int ap_id;
	
	@Column
	private int d_id;

	@Column
	private int p_id;
	
	@Column
	private Date date;
	
	@Column
	private String time;
	
	@Column
	private String status="pending";

	public Appointment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Appointment(int ap_id, int d_id, int p_id, Date date, String time, String status) {
		super();
		this.ap_id = ap_id;
		this.d_id = d_id;
		this.p_id = p_id;
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

	public int getD_id() {
		return d_id;
	}

	public void setD_id(int d_id) {
		this.d_id = d_id;
	}

	public int getP_id() {
		return p_id;
	}

	public void setP_id(int p_id) {
		this.p_id = p_id;
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
		return "Appointment [ap_id=" + ap_id + ", d_id=" + d_id + ", p_id=" + p_id + ", date=" + date + ", time=" + time
				+ ", status=" + status + "]";
	}

	

	
		
	
}