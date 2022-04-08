import React, { Component } from 'react'
import Header from "./Header";
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button, Card, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
export default class Register extends React.Component {
  constructor(props)
  {
    super(props);
   
    this.state=
    {
      
      fname:"",
      lname:"",
      contact_no:"",
      address:"",
      experience:"",
      specalization:"",
      email:"",
      password:"",
      error:
      {
        fnameerr:"",
        lnameerr:"",
        emailerr:"",
        passworderr:"",
        address:"",
        contact_no_err:"",
        experienceerr:"",
        specalizationerr:"",
      }
    }
  }
 
  handleChange = (a) => 
  {
    const input = a.target;
    const nm = input.name;
    const patternemail = /^[A-za-z0-9.]{3,}@[a-z0-9]{3,}\.[a-z]{3,}$/;
    const patternpwd = /^[A-Za-z@!#$%*.]{1,}[A-Za-z@!#$%*.]{2,}[A-Za-z@!#$%*.]{3,}$/;
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
                        if (nm === "experience") 
                        {
                          val = input.value;
                          if (val.length < 1) 
                          {
                              error.experienceerr = "Too short experience";
                          }
                          else 
                          {
                                error.experienceerr = "";
                          }
                        }
                        else
                        {
                          if (nm === "specalization") 
                          {
                            val = input.value;
                            if (val.length < 3) 
                            {
                                error.specalizationerr = "Too short specalization";
                            }
                            else 
                            {
                                  error.specalizationerr = "";
                            }
                          }
                        }
                    }
                    
                }
            }
        }
    
    this.setState({ error, [nm]: val })

  }


  register = async(e) =>
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
        lname: this.state.lname,
        contact_no: this.state.contact_no,
        experience:this.state.experience,
        specalization: this.state.specalization,
        address: this.state.address
       })
     };

     fetch("http://localhost:8080/doctor/dregisteration",requestOptions)
        .then(resp=>resp.text())
        .then(data=> this.setState({st : data ,success : true}));
     alert("Registered")
     window.location.href='/login';
      
     
   }




render()
{

return (
<div>
 
 <Header />
  <section className="h-100 bg-dark">

<div className="container py-5 h-100">
<div className="row d-flex justify-content-center align-items-center h-100">
  <div className="col">
    <div className="card card-registration my-4">
      <div className="row g-0">
        <div className="col-xl-6 d-none d-xl-block">
          <img
            src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/img4.jpg"
            alt="Sample photo"
            className="img-fluid"
            style={{"borderTopLeftRadius": ".25rem","borderBottomLeftRadius": ".25rem"}}
          />
        </div>

       
        <div className="col-xl-6">

        <Form>
          <h3 className="mb-5 text-uppercase">Doctor Registration form</h3>
            <FormGroup>
              <Input 
              id="fname"
              name="fname"
              type='text'
              placeholder='Enter First Name'
              value={this.state.fname}
              onChange={this.handleChange}
              >
              </Input>              
            </FormGroup>
            <FormGroup>
              <Input 
              id="lname"
              name="lname"
              type='text'
              placeholder='Enter Last Name'
              value={this.state.lname}
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
            <FormGroup>
              <Input 
              id="specalization"
              name="specalization"
              type='text'
              placeholder='Enter Specialization'
              value={this.state.specalization}
              onChange={this.handleChange}
              >
              </Input>              
            </FormGroup>
            <FormGroup>
              <Input 
              id="experience"
              name="experience"
              type='text'
              placeholder='Enter Experience'
              value={this.state.experience}
              onChange={this.handleChange}
              >
              </Input>              
            </FormGroup>
            <span>
              {this.state.error.emailerr}
              {this.state.error.fnameerr}
              {this.state.error.lnameerr}
              {this.state.error.addresserr}<br />
              {this.state.error.passworderr}
              {this.state.error.contact_no_err}
              {this.state.error.experienceerr}<br/>
              {this.state.error.specalizationerr}
            </span>
            <FormGroup className="mb-2" controlId="formBasicEmail">
              <Link to="register" ><button className='innerbutton' type="submit" onClick={this.register}>Register</button></Link><br />
            </FormGroup> 
            <FormGroup className="mb-2" controlId="formBasicEmail">
              <Link to="/login" ><button className='innerbutton'><ArrowBackIcon/>Back</button></Link><br />
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
