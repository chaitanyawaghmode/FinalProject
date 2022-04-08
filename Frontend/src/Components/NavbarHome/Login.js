
import axios from "axios";
import React ,{ useState }from "react";
import { toast ,ToastContainer} from "react-toastify";
import { Button, Card, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import dlogin from '../../Assets/dlogin.jpg';
import Cookies from 'universal-cookie'
import Header from "./Header";
import "../../styles/Contact.css";

function Login() {

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
 
  
  const handleClick=()=>{
    const login = { email,password }
    const cookies = new Cookies()
    
    axios.post(`http://localhost:8080/doctor/dloginl`,login).then(
        (response)=>
        {
            
            console.log("success");
            console.log(response);
             window.location.href = "/doctor";
            localStorage.setItem('d_id',response.data.d_id)
            cookies.set('d_id',response.data.d_id,{path:'/'})
            cookies.set('fname',response.data.fname,{path:'/'})
        },
        (error)=>
        {
         
            alert("Invalid Login Details",error);
            toast.error('invalid login');
            console.log(error);
            console.log("Error");
        }
    );
};


  return (
    <div>
 
    {/* <Navbar></Navbar> */}
     <Header/>
    <div className="contact">
      <div
        className="leftSide"
         style={{ backgroundImage: `url(${dlogin})` }}
      >
        {/* //leftside */}
        
        </div>
      <div className="rightSide">
        <h1> Doctor Login</h1>

        <Form inline>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
        
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
   style={{align:"center"}}>
    Submit
  </Button>
</Form> 
      </div>
      </div>
     
    </div>
  );
}

export default Login;

