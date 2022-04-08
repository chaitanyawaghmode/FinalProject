
import React, { useContext } from 'react';
//import './Login.css';
import { Button, Card, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Cookies from 'universal-cookie';
import Header from "./Header";

export default class PRegister extends React.Component {
    constructor(props)
    {
      super(props);
     
      this.state=
      {
        
        fname:"",
        
        contact_no:"",
        address:"",
        email:"",
        password:"",
        error:
        {
          fnameerr:"",
         
          emailerr:"",
          passworderr:"",
          address:"",
          contact_no_err:""
        }
      }
    }

    handleChange = (a) => 
    {
      const input = a.target;
      const nm = input.name;
      const patternemail = /^[A-za-z0-9.]{3,}@[a-z0-9]{3,}\.[a-z]{3,}$/;
      const patternpwd = /^[A-Za-z@!#$%*.]{1,}[A-Za-z@!#$%*.]{1,}[A-Za-z@!#$%*.]{2,}$/;
      let val;
      let error = this.state.error;
      if (nm === "fname") 
      {
          val = input.value;
          if (val.length < 3) 
          {
              error.fnameerr = "Too Short First Name";
          }
          else 
          {
              error.fnameerr = "";
          }
      }
      else 
      {
          if (nm === "lname") 
          {
              val = input.value;
              if (val.length < 3) 
              {
                  error.lnameerr = "Too short last Name";
              }
              else 
              {
                  error.lnameerr = "";
              }
          }
          else 
          {
              if (nm === "email") 
              {
                  val = input.value;
                  if (!(patternemail.test(val))) 
                  {
                      error.emailerr = "Invalid Email";
                  }
                  else
                  {
                      error.emailerr = "";
                  }
              }
              else 
                {
                  if (nm === "password") 
                    {
                        val = input.value;
                        if (!(patternpwd.test(val))) 
                        {
                          error.passworderr = "Invalid Password";
                        }
                        else 
                        {
                          error.passworderr = "";
                        }
                      }
                    else 
                    {
                        if (nm === "address") 
                        {
                          val = input.value;
                          if (val.length < 3) 
                          {
                              error.addresserr = "Too short address";
                          }
                          else 
                          {
                                error.addresserr = "";
                          }
                        }
                          else 
                          {
                              if (nm === "contact_no") 
                              {
                                  val = input.value;
                                  if (val.length < 10) 
                                  {
                                      error.contact_no_err = "Invalid Number";
                                  }
                                  else 
                                  {
                                      error.contact_no_err = "";
                                  }
                              }
                          }
                      }
                  }
              }
          }
      
      this.setState({ error, [nm]: val })

    }
  
    
    register = async (e) => 
    {

      
       const requestOptions=
       {
         method:'POST',
         headers:
         {
           'Content-Type':'application/json'
         },
         body:JSON.stringify
         ({
          email: this.state.email,
          password: this.state.password,
          fname: this.state.fname,
         
          contact_no: this.state.contact_no,
          address: this.state.address,
         })    
       };
       fetch("http://localhost:8080/patient/pregister",requestOptions)
          .then(resp=>resp.text())
          .then(data=> this.setState({st : data ,success : true}));      
       alert("Registered")
       window.location.href = '/plogin';
       
        
       
     }




render()
{

 return (
  <div>
   
   <Header />
    <section class="h-100 bg-dark">

<div class="container py-5 h-100">
  <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col">
      <div class="card card-registration my-4">
        <div class="row g-0">
          <div class="col-xl-6 d-none d-xl-block">
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/img4.jpg"
              alt="Sample photo"
              class="img-fluid"
              style={{"borderTopLeftRadius": ".25rem","borderBottomLeftRadius": ".25rem"}}
            />
          </div>

         
          <div class="col-xl-6">

          <Form>
          <h3 className="mb-5 text-uppercase">Veterinary Registration form</h3>
            <FormGroup>
              <Input 
              id="fname"
              name="fname"
              type='text'
              placeholder='Enter  Name'
              value={this.state.fname}
              onChange={this.handleChange}
              >
              </Input>              
            </FormGroup>
         
            <FormGroup>
              <Input 
              id="email"
              name="email"
              type='email'
              placeholder='Enter Email ID'
              value={this.state.email}
              onChange={this.handleChange}
              >
              </Input>              
            </FormGroup>
            <FormGroup>
              <Input 
              id="password"
              name="password"
              type='password'
              placeholder='Enter Password'
              value={this.state.password}
              onChange={this.handleChange}
              >
              </Input>              
            </FormGroup>
            <FormGroup>
              <Input 
              id="address"
              name="address"
              type='text'
              placeholder='Enter Address'
              value={this.state.address}
              onChange={this.handleChange}
              >
              </Input>              
            </FormGroup>
            <FormGroup>
              <Input 
              id="contact_no"
              name="contact_no"
              type='text'
              placeholder='Enter Phone Number'
              value={this.state.contact_no}
              onChange={this.handleChange}
              >
              </Input>              
            </FormGroup>
            <span>
              {this.state.error.emailerr}
              {this.state.error.fnameerr}
              {this.state.error.addresserr}<br />
              {this.state.error.passworderr}
              {this.state.error.contact_no_err}
            </span>
            <FormGroup className="mb-2" controlId="formBasicEmail">
              <Link to="register" ><button className='innerbutton' type="submit" onClick={this.register}>Register</button></Link><br />
            </FormGroup> 
            <FormGroup className="mb-2" controlId="formBasicEmail">
              <Link to="/plogin" ><button className='innerbutton'><ArrowBackIcon/>Back to Login</button></Link><br />
            </FormGroup>
        
          </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

</div>
 );
}

}
