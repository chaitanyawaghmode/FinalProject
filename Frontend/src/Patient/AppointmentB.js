import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import PatientNavbar from './PatientNavbar';
import { FormGroup, Input,Label,FormText,Form, Button,Table } from 'reactstrap';
import Cookies from 'universal-cookie';




export default class Appointment extends React.Component{
  constructor(props)
  {
    super(props);
    this.state=
    {
      
      "date":"",
      "time":"",

      "fname":"",
      "lname":"",
      "experience":"",
      specalization:"",
     
    }    
   
    this.date = this.date.bind(this);
    this.time = this.time.bind(this);
    this.fname = this.fname.bind(this);
    this.lname = this.lname.bind(this);
    this.specalization = this.specalization.bind(this);
    this.experience = this.experience.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  
  componentDidMount()
  {
    const dr_id = window.location.search;
    const params = new URLSearchParams(dr_id);
    const c = new Cookies();
    var d_id = params.get("d_id");
    var p_id = c.get('p_id')
    c.set('d_id',d_id,{path:'/'})

    this.setState({d_id:c.get('d_id')})
    //const cookies = new Cookies();
    var api_get = "http://localhost:8080/doctor/sdoctor/?d_id="+c.get('d_id')
    fetch(api_get)
    .then(resp=>resp.text())
    .then(data=> {
     
     const json = JSON.parse(data);
     //alert(myobj[0].fname)
     this.setState({d_id:json.d_id});
     this.setState({fname:json.fname});
     this.setState({lname:json.lname});
     this.setState({specalization:json.specalization})
   }
  );
    

}


onSubmit()
{

  const c = new Cookies();
  console.log(this.state);
  const requestOptions={
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      date:this.state.date,
      time:this.state.time,
      p_id:c.get("p_id"),
      d_id:c.get("d_id")     
    })
  }


    fetch("http://localhost:8080/appointment/rapp",requestOptions)
    .then(resp=>resp.text())
    .then(data=> {if(data.length != 0){
     //const json = JSON.parse(data);
     alert("Appointment Booked Successfully.......")
     window.location.href = "/patient";
   }

   else{
     alert("Not Booked")
   }
  });
  
    
    
}



date=(event)=>
{
  this.setState({date: event.target.value});
  console.log(this.state);
}

time=(event)=>
{
  this.setState({time: event.target.value});
  console.log(this.state);
}



specalization = (event)=>
{
  this.setState({specalization:event.target.value});
  console.log(this.specalization);
}

fname=(event)=>
{
  this.setState({fname:event.target.value});
  console.log(this.state);
}

lname=(event)=>
{
  this.setState({lname:event.target.value});
  console.log(this.state);
}


experience=(event)=>
{
  this.setState({experience:event.target.value});
  console.log(this.state);
}


  render()
    {
      {const c = new Cookies()
        var p_id = c.get('p_id');
        var d_id = c.get('d_id');
      }
        return(
            <div>
                <PatientNavbar/>      
                <div class="contact-wrapper"> 
                        <div class="container-fluid no-padding">
  <div class="row">
    <div class="col-md-12">
    <h3><i>Book Appointment</i></h3>
      <img src="https://image.freepik.com/free-vector/appointment-booking-with-calendar_23-2148553008.jpg" class="img-responsive" height="440" width="350"/>
    </div>
  </div>
</div>
                   
    
    <Form id='appform' className='formHorizontal'>
     
    <FormGroup className="mb-2 me-sm-2 mb-sm-0 ">
        <Label 
        className="me-sm-2"
        for="p_id" 
        >
          Patient ID
        </Label> 
        <Input
          id='p_id'
          name='p_id'
          defaultValue={p_id}
          
        />
      </FormGroup>
      <FormGroup className="mb-2 me-sm-2 mb-sm-0 ">
        <Label 
        className="me-sm-2"
        for="d_id" 
        >
          Doctor ID
        </Label> 
        <Input
          id='d_id'
          name='d_id'
          defaultValue={d_id}          
        />
      </FormGroup>
      <FormGroup className="mb-2 me-sm-2 mb-sm-0 ">
        <Label 
        className="me-sm-2"
        for="fname" 
        >
          Doctor Name
        </Label> 
        <Input
          id='fname'
          name='fname'
          defaultValue={this.state.fname}
          
        />
      </FormGroup>
      <FormGroup className="mb-2 me-sm-2 mb-sm-0 ">
        <Label 
        className="me-sm-2"
        for="specailzation" 
        >
          Specialization
        </Label> 
        <Input
          id='specalization'
          name=' specalization'
          defaultValue={this.state.specalization}
          
        />
      </FormGroup>
      <FormGroup className="mb-2 me-sm-2 mb-sm-0 ">
        <Label 
        className="me-sm-2"
        for="date" 
        >
          Date
        </Label> 
        <Input
          id='date'
          name='date'
          type='date'
          value={this.state.date}
          onChange={this.date}
          required
        />
      </FormGroup>
      <FormGroup className="mb-2 me-sm-2 mb-sm-0 ">
        <Label 
        className="me-sm-2"
        for="time" 
        >
          time
        </Label> 
        <Input
          id='time'
          name='time'
          type='select'
          value={this.state.time}
          onChange={this.time}
          required
        >
          <option>
          09:00 AM - 09:15 AM
          </option>
          <option>
          09:15 AM - 09:30 AM
          </option>
          <option>
          09:30 AM - 09:45 AM
          </option>
          <option>
          09:45 AM - 10:00 AM
          </option>
          <option>
          10:00 AM - 10:15 AM
          </option>
          <option>
          10:15 AM - 10:30 AM
          </option>
          <option>
          07:00 PM - 07:15 PM
          </option>
          <option>
          07:15 PM - 07:30 PM
          </option>
          <option>
          07:30 PM - 07:45 PM
          </option>
          <option>
          07:45 PM - 08:00 PM
          </option>
        </Input>
      </FormGroup>
      <Button className="btn btn-primary send-button" id="submit" type="button" value="SEND" onClick={this.onSubmit}>
        <div className="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">Book</span>
        </div>
      
      </Button>
    </Form>
    </div>
            </div>
        )
    }
}
