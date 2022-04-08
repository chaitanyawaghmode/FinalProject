import React from 'react';
import DoctorNavbar from './DoctorNavbar';
import Cookies from 'universal-cookie';
import { FormGroup, Input,Label,FormText,Form, Button } from 'reactstrap';


export default class UpdateDetails extends React.Component 
{
  constructor(props)
  {
   
    super(props);
    this.state=
    {
    
      fname:"",
      lname:"",
      address:"",
      email:"",
      contact_no:"",
      password:"",
      experience:"",
      specalization:""

    }

    
    this.fname = this.fname.bind(this);
    this.lname = this.lname.bind(this);
    this.address = this.address.bind(this);
    this.email = this.email.bind(this);
    this.contact_no = this.contact_no.bind(this);
    this.password = this.password.bind(this);
    this.experience = this.experience.bind(this);
    this.specalization = this.specalization.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount()
  {
    const cookies = new Cookies();
    var api = "http://localhost:8080/doctor/sdoctor/?d_id="+cookies.get('d_id');
    fetch(api)
      .then(resp=>resp.text())
      .then(data=>{
        const json = JSON.parse(data);

        this.setState({fname:json.fname})
        this.setState({lname:json.lname});
        this.setState({email:json.email});
        this.setState({contact_no:json.contact_no});
        this.setState({password:json.password});
        this.setState({address:json.address});
        this.setState({experience:json.experience});
        this.setState({specalization:json.specalization})
      })

  }

  onSubmit()
  {
    const cookie = new Cookies();
    console.log(this.state)
    const requestOption=
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify
      ({
        email : this.state.email,
        password : this.state.password,
        address : this.state.address,
        contact_no : this.state.contact_no,
        fname : this.state.fname,
        lname : this.state.lname,
        experience : this.state.experience,
        specalization : this.state.specalization,
        d_id : cookie.get('d_id')
      })
    }

    fetch("http://localhost:8080/doctor/udoctor",requestOption)
    .then(resp=>resp.text())
    .then(data=> {if(data.length != 0){
      alert("Updated Successfully");
    }
    else{
      
    }

    
  });

  }
  
fname=(event)=>
{
  this.setState({fname: event.target.value});
  console.log(this.state);
}


lname=(event)=>
{
  this.setState({lname: event.target.value});
  console.log(this.state);
}



email=(event)=>
{
  this.setState({email: event.target.value});
  console.log(this.state);
}



contact_no=(event)=>
{
  this.setState({contact_no: event.target.value});
  console.log(this.state);
}

address=(event)=>
{
  this.setState({address: event.target.value});
  console.log(this.state);
}
password=(event)=>
{
  this.setState({password: event.target.value});
  console.log(this.state);
}

experience=(event)=>
{
  this.setState({experience:event.target.value})
  console.log(this.state);
}

specalization=(event)=>
{
  this.setState({specalization:event.target.value})
  console.log(this.state);
}

render()
{
    return(
        <div>
            <DoctorNavbar/>      
            <div className="contactWrapper"> 
                    <div className="containerFluid noPadding">
<div className="row">
<div className="col-md-12">
<h3><i>My Profile</i></h3>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQqhlB3K44SR3hw30aQyZ1-9DGZvvMRbu4Q&usqp=CAU" className="imgResponsive" height="580" width="350"/>
</div>
</div>
</div>
               

  <Form id='update' className='formHorizontal'>
    <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
      <Label 
      className='me-sm-2' 
      for='fname'>
        First Name
      </Label>
      <Input 
      id="fname"
      name='fname'
      type='text'
      value={this.state.fname}
      onChange={this.fname}
      />
    </FormGroup>
    <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
      <Label 
      className='me-sm-2' 
      for='lname'>
        Last Name
      </Label>
      <Input 
      id="lname"
      name='lname'
      type='text'
      value={this.state.lname}
      onChange={this.lname}
      />
    </FormGroup>
    <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
      <Label 
      className='me-sm-2' 
      for='address'>
        Address
      </Label>
      <Input 
      id="address"
      name='address'
      type='text'
      value={this.state.address}
      onChange={this.address}
      />
    </FormGroup>
    <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
      <Label 
      className='me-sm-2' 
      for='experience'>
        Experience
      </Label>
      <Input 
      id="exp"
      name='exp'
      type='text'
      value={this.state.experience}
      onChange={this.experience}
      />
    </FormGroup>
    <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
      <Label 
      className='me-sm-2' 
      for='specalization'>
        Specalization
      </Label>
      <Input 
      id="spec"
      name='spec'
      type='text'
      value={this.state.specalization}
      onChange={this.specalization}
      />
    </FormGroup>
    <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
      <Label 
      className='me-sm-2' 
      for='contact_no'>
        Phone
      </Label>
      <Input 
      id="contact_no"
      name='contact_no'
      type='text'
      value={this.state.contact_no}
      onChange={this.contact_no}
      />
    </FormGroup>
    <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
      <Label 
      className='me-sm-2' 
      for='email'>
        Email ID
      </Label>
      <Input 
      id="email"
      name='email'
      type='email'
      value={this.state.email}
      onChange={this.email}
      />
    </FormGroup>
    <FormGroup className='mb-2 me-sm-2 mb-sm-0'>
      <Label 
      className='me-sm-2' 
      for='password'>
        Password
      </Label>
      <Input 
      id="pass"
      name='pass'
      type='password'
      value={this.state.password}
      onChange={this.password}
      />
    </FormGroup>
     <Button className="btn btn-primary send-button"
      id="submit" type="button" value="SEND" onClick={this.onSubmit}>
        <div className="alt-send-button">
          <span class="send-text">Update</span>
        </div>
        </Button>
  </Form>
</div>
        </div>
    )
}

}