
import axios from "axios";
import React ,{ useState }from "react";
import { Link } from "react-router-dom";
import { toast ,ToastContainer} from "react-toastify";
import { Button, Card, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import plogin from '../../Assets/plogin.jpg';
import Header from "./Header";
import Cookies from 'universal-cookie'


 function PLogin () {

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')


  const handleClick=()=>{
    const login = {email,password }
    const cookies = new Cookies()
    axios.post(`http://localhost:8080/patient/ploginl`,login).then(
        (response)=>{
            toast.success('login successfull');
            console.log("success");
            console.log(response);
             window.location.href = "/patient";
            localStorage.setItem('p_id',response.data.p_id)
            cookies.set('p_id',response.data.p_id,{path:'/'})
            
        },
        (error)=>{
         
            alert("Invalid Login Details",error);
            toast.error('invalid login');
            console.log(error);
            console.log("Error");
        }
    );
};
    
    
  
    
    return (
      <div>
        <Header />
        <div className="contact">
      <div
        className="leftSide"
         style={{ backgroundImage: `url(${plogin})` }}
      >
        {/* //leftside */}
        
        </div>
      <div className="rightSide">
        <h1> Veterinary Login</h1>

        <Form inline>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="exampleEmail"
    >
      Email
    </Label>
    <Input
      id="email"
      name="email"
      placeholder="something@idk.cool"
      type="email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
    />
  </FormGroup>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0 ">
    <Label
      className="me-sm-2"
      for="examplePassword"
    >
      Password
    </Label>
    <Input
      id="password"
      name="password"
      placeholder="don't tell!"
      type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
    />
  </FormGroup>
  <Button
   onClick={handleClick}
  >
    Submit
  </Button>
</Form> 
      </div>
      </div>
   
    </div>
    );
    
}

export default PLogin;
