import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { FormGroup, Input,Label,FormText,Form, Button,Table } from 'reactstrap';
import PatientNavbar from './PatientNavbar';
import Cookies from 'universal-cookie';


export default class ViewDoctors extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            doctors:[]
        }
    }



    componentDidMount()
  {
    const cookies = new Cookies();
    var api_get = "http://localhost:8080/doctor/adoctor"
    fetch(api_get)
    .then(resp=>resp.text())
    .then(data=> {

     const json = JSON.parse(data);
   
    for(var i=0;i<json.length;i++)
    {
        
            var fn = json[i].fname;
            var ln = json[i].lname;
            var contact=json[i].contact_no; 
            var spe = json[i].specalization;
            var exp  = json[i].experience;
            var add  = json[i].address;
            var d_id = json[i].d_id;
  
            var final = '<center><div class="card text-white bg-dark mb-3" style="max-width: 50rem;"><div className="card-header"style="color:blueviolet"<b>'+spe+'</b></div><div className="card-body"><h5 className="card-title">Dr. '+fn+" "+ln+'</h5><p className="card-text">   with '+exp+' years of Experience'+'</p> <p className="card-text">Address is '+add+'<p className="card-text">Phone Numbers is:'+contact+' <a href="/bappoint?d_id='+d_id+'" class="btn btn-primary">Book Appoitment</a><a href="feedback?d_id='+d_id+'"class="btn btn-primary">Give Feedback</a></div></div></center>'
            
            this.setState({
                doctors: this.state.doctors.concat(final)
              })
            
        
    }

   }
  );
    

}



    render(){
        return (
            
            <div>
                <PatientNavbar/>
               <br></br><br></br><br></br><br></br>
               <div>
                <h2 className="text-center">Doctors Available</h2>
                <div className="row">
                    </div>
                    </div>
               
                    {
                        this.state.doctors.map(
                            obj=>{
                                return(
                                    
                                    <div dangerouslySetInnerHTML={{ __html:obj }} /> 
                                    
                                )
                            }
                        )
                    }
                
            
            </div>
        )
    }
}
