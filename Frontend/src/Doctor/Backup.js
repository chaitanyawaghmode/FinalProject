import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import DoctorNavbar from './DoctorNavbar'

class Backup extends React.Component {
  load()
  {
    const c = new Cookies();
    const ap_id = c.get('ap_id');
    var load = "<h2>Appointment Id is "+ap_id+"</h2>"

  }
  render() { 
    return (
      <div>
        <DoctorNavbar />
        Backup
        <p onLoad={this.load}></p>
      </div>
    )
  }
}
export default Backup;
