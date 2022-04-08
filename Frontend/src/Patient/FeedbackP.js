import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { toast } from 'react-toastify';
import { FormGroup, Input,Label,FormText,Form, Button,Table } from 'reactstrap';
import PatientNavbar from './PatientNavbar'




function FeedbackP() {
  
  const [data,setData] = useState([]);
  const url = `http://localhost:8080/doctor/adoctor`;
  const showItems = () => 
  {
    fetch(`${url}`)
    .then(res => res.json())
    .then(json => setData(json));
  }

  useEffect(()=>{
    showItems();
  },[]);


  const [d_id,setD_id]=useState('');
  const [rating,setRating]=useState('');


  const handleClick=(e)=>
  {
    e.preventDefault();
    const feedback = {d_id,rating}
    axios.post(`http://localhost:8080/feedback/gfeedback`,feedback)
    .then(
    (response)=>
    {
      console.log("success");
      console.log(response)
      alert("Feedback Registered");
        window.location.href='/patient';
    },
    (error)=>
    {
      toast.error('invalid entry');
      console.log(error);
      console.log("Error");
    }
    );

  }

  return (
    <div>
        <PatientNavbar />

      <div style={{paddingTop:"120px", paddingLeft:"20px" , paddingRight:"20px" }}>
        <Table bordered striped>
          <thead>
              <tr>
                <th> Doctor ID</th>
                <th> Doctor Name </th>
                <th> Specialization  </th>
                <th> Experience </th>
                <th> Contact No. </th>
              </tr>
            </thead>
            <tbody>
                {
                    data.map((doctor) => (
                    <tr key={doctor.d_id}>
                      <td>{doctor.d_id}</td>                           
                      <td>{doctor.fname +" "+ doctor.lname}</td>
                      <td>{doctor.specalization}</td>
                      <td>{doctor.experience}</td>
                      <td>{doctor.contact_no}</td>
                        
                    </tr>
                    ))
                }
            </tbody>
          </Table>
        </div>

        <Form style={{paddingTop:"120 px"}}>
          <h1>Give Feedback</h1>
          <FormGroup>
                <Label for ="d_id">
                  Doctor ID
                </Label>
               <Input 
               id='d_id'
               name='d_id'
               placeholder='Doctor ID'
               type='text'
               value={d_id}
               onChange={(e)=>setD_id(e.target.value)}
               >
                </Input>
          </FormGroup>
          <FormGroup>
                <Label for ="d_id">
                  Rating
                </Label>
               <Input 
               id='d_id'
               name='d_id'
               placeholder='Doctor ID'
               type='select'
               value={rating}
               onChange={(e)=>setRating(e.target.value)}
               >
               <option>
                Bad
               </option>
               <option>
                Better
               </option>
               <option>
                Good
               </option>
               <option>
                Best
               </option>
               <option>
                Excellent
               </option>
                </Input>
          </FormGroup>
          <Button
            onClick={handleClick}
          >
            Submit
          </Button>

        </Form>
    </div>
    
  )
}

export default FeedbackP