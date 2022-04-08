import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import PatientNavbar from "./PatientNavbar";

import '../styles/Doct_Pat.css';
import { FormGroup, Input,Label,FormText,Form, Button,Table } from 'reactstrap';
class PatientHome extends React.Component {
 

  constructor(props) 
  {
    super(props)
  
    this.state = 
    {
       doctor:[]
    }
  }
    componentDidMount = () =>
    {
      const c = new Cookies()
      var p_id = c.get('p_id')
      var api = "http://localhost:8080/appointment/dappoint/?p_id="+p_id;
      fetch(api)
        .then(resp => resp.json())
        .then(data => {this.setState({doctor : data});
      });
    }



  

  render()
  {
  return (
    <div>
        <PatientNavbar />
      
        <div class="pat">
             
             <div className="row">
               
                 <div class="col-xl-12 d-none d-xl-block">   
                 <br/>
                    <br/> 
                    <br/>  <br/>  <br/> 
                 <h1><b><i><span>"Never believe that animals suffer less than humans.<br/>
                  Pain is the same for them that it is for us.<br/> Even worse, because they cannot help themselves.""
                  <br/></span></i></b></h1><br/>
                  <br/>    <br/>    <br/>    <br/><br/>    <br/><br/>    <br/>
                
                   </div>
                   <div className='col-6'>
                      <table className='table table-bordered' >
                        <thead style={{"color":"grey"}}>
                          <tr>
                            <th >
                              Appointment ID
                            </th>
                            <th>
                              Doctor Name
                            </th>
                            <th>
                              Appointment Date
                            </th>
                            <th>
                              Appointment Time
                            </th>
                            <th>
                              Appointment Status
                            </th>
                          </tr>
                        </thead>
                        <tbody style={{"color":"white"}}>
                          {
                            this.state.doctor.map
                            (
                              obj=>{
                                return(
                                  <tr key={obj.appointment[0].ap_id}>
                                    <td>{obj.appointment[0].ap_id}</td>
                                    <td>{obj.fname+" "+obj.lname}</td>
                                    <td>{obj.appointment[0].date}</td>
                                    <td>{obj.appointment[0].time}</td>
                                    <td>{obj.appointment[0].status}</td>

                                  </tr>
                                )
                              }
                            )
                          }
                        </tbody>
                      </table>
                   </div>
             </div>
             </div>
    </div>
  )
  }
}
export default PatientHome