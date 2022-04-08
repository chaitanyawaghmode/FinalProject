import React,{useEffect,useState} from 'react';
import Cookies from 'universal-cookie';
import {keyBy} from 'lodash';
import { Button, Card, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import DoctorNavbar from './DoctorNavbar';




class Appointments extends React.Component {

  
  constructor(props)
  {
   
    super(props)
    this.state=
    {
        patient : [],
        status:"",
    }
  }

  componentDidMount = () =>

  {

    
    const cookie = new Cookies();

    
    var api = "http://localhost:8080/appointment/appoint/?d_id="+cookie.get('d_id');
    fetch(api)
    .then(resp => resp.json())
    .then(data => {this.setState({patient : data});
          });

  }

  backup(ap_id)
  {
    
    var a = parseInt(ap_id);

    const Update=
    {
      method:'PUT',
      headers:
      {
        'Content-Type':'application/json'
      },
      body:JSON.stringify
      ({
        ap_id:a,
     
        status:"sending backup"
      })
    }
    fetch("http://localhost:8080/appointment/uapp",Update)
      .then(resp=>resp.text())
      .then(data=>{if(data.length != 0){
        alert("Status Updated")
        window.location.href='/appointments'
      }
      });

    
  }

  success(ap_id)
  {
    var a = parseInt(ap_id);

    const Update=
    {
      method:'PUT',
      headers:
      {
        'Content-Type':'application/json'
      },
      body:JSON.stringify
      ({ 
        ap_id:a,
        status:"Confirmed"
      })
    }
    fetch("http://localhost:8080/appointment/uapp",Update)
      .then(resp=>resp.text())
      .then(data=>{if(data.length != 0){
        
         alert("Status Updated")
         window.location.href='/appointments'
      }
      });
  }

  cancel(ap_id)
  {
    var a = parseInt(ap_id);
    const Update=
    {
      method:'PUT',
      headers:
      {
        'Content-Type':'application/json'
      },
      body:JSON.stringify
      ({
        ap_id:a, 
        status:"Cancelled Plz Reschedule"
      })
    }
    fetch("http://localhost:8080/appointment/uapp",Update)
      .then(resp=>resp.text())
      .then(data=>{if(data.length != 0){        
        alert("Status Updated")
        window.location.href='/appointments'
      }
      });
  }
  
  render()
  {
    return(
      <div>
        <DoctorNavbar />
   
      
        <br></br><br></br><br></br><br></br>
        <h2>Appointments</h2>
         <table className='table table-bordered'>
          <thead>
            <tr>
               <th>
                 Appointment ID
               </th>
               <th>
                First Name
              </th>
              <th>
                Phone Number
              </th>
              <th>
                Address
              </th>
               <th>
                Appointment Date
              </th>
              <th>
                Appointment Time
              </th> 
              <th>
                Status
              </th>
              <th>
                Action
              </th> 
             </tr> 
           </thead> 
           <tbody>
           
          {
            this.state.patient.map  (
              obj=>{
                return(
                    <tr key={obj.appointment[0].ap_id}>
                      <td>{obj.appointment[0].ap_id}</td>
                      <td>{obj.fname}</td>
                      <td>{obj.contact_no}</td>
                      <td>{obj.address}</td>
                      <td>{obj.appointment[0].date}</td>
                      <td>{obj.appointment[0].time}</td>
                      <td>{obj.appointment[0].status}</td>
                      <td><Button className='btn btn-warning' style={{"width":"30%","height":"25%"}}
                      onClick={() => this.backup(obj.appointment[0].ap_id)}>
                        Backup
                        </Button>
                        <Button className='btn btn-success' style={{"width":"30%","height":"25%"}}
                        onClick={() => this.success(obj.appointment[0].ap_id)}>
                          Confirm 
                        </Button>
                        <Button className='btn btn-danger' style={{"width":"30%","height":"25%"}}
                        onClick={() => this.cancel(obj.appointment[0].ap_id)}>
                          Cancel 
                        </Button>
                        </td>
                      </tr>
                )
              }
            )
          }
          
      
          </tbody> 
         </table> 
      </div>
    )
  }
}

export default Appointments


