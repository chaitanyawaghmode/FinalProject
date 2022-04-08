import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap';
import Cookies from 'universal-cookie';
import DoctorNavbar from './DoctorNavbar'

function Feedback() {
  const c = new Cookies();
  const [data,setData] = useState([]);
  
  const api = "http://localhost:8080/doctor/sdoctor/?d_id="+c.get('d_id');
  const showItems = () =>
  {
    fetch(`${api}`)
    .then(res => res.json())
    .then(json => setData(json));
  }
  useEffect(()=>{
    showItems();
  },[]);
  
  return (
    <div>
        <DoctorNavbar />
          <br></br><br></br><br></br><br></br>
          <Table>
            <thead>
              <th>Rating</th>
            </thead>
            <tbody>

            {
                    data.map((feedback) => (
                    <tr key={feedback.f_id}>
                      <td>{feedback.rating}</td>
                    </tr>
                    ))
                }
               </tbody>
         </Table>
    </div>
  )
}

export default Feedback