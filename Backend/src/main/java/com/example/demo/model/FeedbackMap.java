package com.example.demo.model;

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
@Table(name="Feedback")
public class FeedbackMap {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int f_id;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "d_id")
	@JsonProperty(access = Access.WRITE_ONLY)
	Doctor doctor;
	
	@Column(name="rating")
	public String rating;

	public FeedbackMap() {
		super();
		// TODO Auto-generated constructor stub
	}

	public FeedbackMap(int f_id, Doctor doctor, String rating) {
		super();
		this.f_id = f_id;
		this.doctor = doctor;
		this.rating = rating;
	}

	public int getF_id() {
		return f_id;
	}

	public void setF_id(int f_id) {
		this.f_id = f_id;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	@Override
	public String toString() {
		return "FeedbackMap [f_id=" + f_id + ", doctor=" + doctor + ", rating=" + rating + "]";
	}
	
	
}
