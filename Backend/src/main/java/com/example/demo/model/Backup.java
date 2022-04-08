package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table
public class Backup 
{
	
	@Id
	@GeneratedValue
	private int  b_id;
	
	
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="d_id",referencedColumnName="d_id")
	 Doctor  d_id;
	
	private String b_name;

	public Backup() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Backup(int b_id, Doctor d_id, String b_name) {
		super();
		this.b_id = b_id;
		this.d_id = d_id;
		this.b_name = b_name;
	}
	
	
	
	public int getB_id() {
		return b_id;
	}

	public void setB_id(int b_id) {
		this.b_id = b_id;
	}

	public Doctor getD_id() {
		return d_id;
	}

	public void setD_id(Doctor d_id) {
		this.d_id = d_id;
	}

	public String getB_name() {
		return b_name;
	}

	public void setB_name(String b_name) {
		this.b_name = b_name;
	}

	@Override
	public String toString() {
		return "Backup [b_id=" + b_id + ", d_id=" + d_id + ", b_name=" + b_name + "]";
	}
	
}
	
	