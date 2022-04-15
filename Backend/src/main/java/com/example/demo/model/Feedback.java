package com.example.demo.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;



@Entity
public class Feedback 
{
	
	@Id
	@GeneratedValue
	private int f_id;
	

	private int d_id;
	
	private String rating;

	public Feedback()
	{
		super();
		// TODO Auto-generated constructor stub
	}

	public Feedback(int f_id, int d_id, String rating) 
	{
		super();
		this.f_id = f_id;
		this.d_id = d_id;
		this.rating = rating;
	}

	public int getF_id() {
		return f_id;
	}

	public void setF_id(int f_id) {
		this.f_id = f_id;
	}

	public int getD_id() {
		return d_id;
	}

	public void setD_id(int d_id) {
		this.d_id = d_id;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	@Override
	public String toString() {
		return "Feedback [f_id=" + f_id + ", d_id=" + d_id + ", rating=" + rating + "]";
	}
	
	


	
	
	
}

