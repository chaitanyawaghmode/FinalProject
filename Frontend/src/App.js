
import React from 'react'
import Home from './Components/Home';
import Login from './Components/NavbarHome/Login';
import Register from './Components/NavbarHome/Register';
import AboutUs from './Components/NavbarHome/AboutUs';
import Contact from './Components/NavbarHome/Contact';
import PRegister from './Components/NavbarHome/PRegister';
import ForgetPassword from './Components/NavbarHome/ForgetPassword';
import PLogin from './Components/NavbarHome/PLogin';
import DoctorHome from './Doctor/DoctorHome';
import Appointments from './Doctor/Appointments';
import Feedback from './Doctor/Feedback';
import Leave from './Doctor/Leave';
import Backup from './Doctor/Backup';
import UpdateDetails from './Doctor/UpdateDetails';

import PatientHome from './Patient/PatientHome.js';
import ViewDoctors from './Patient/ViewDoctors';
import FeedbackP from './Patient/FeedbackP';
import UpdatePatient from './Patient/UpdatePatient';
import AppointmentB from './Patient/AppointmentB';

import Footer from './Components/NavbarHome/Footer';
import './App.css';
import {Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     

      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/plogin' element={<PLogin />}></Route>
        <Route exact path='/pregister' element={<PRegister />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/about' element={<AboutUs />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>


        <Route exact path='/doctor' element={<DoctorHome />}> </Route>
        <Route exact path='/appointments' element={<Appointments />}></Route>
        <Route exact path='/updateDoctor' element={<UpdateDetails />}></Route>
        <Route exact path='/leave' element={<Leave />}></Route>
        <Route exact path='/vfeedback' element={<Feedback />}></Route>
        <Route exact path='/backup' element={<Backup/>}></Route>

        <Route exact path = '/patient' element={<PatientHome />}> </Route>
        <Route exact path = '/feedback' element={<FeedbackP />}> </Route>
        <Route exact path = '/vdoctor' element={<ViewDoctors />}></Route>
        <Route exact path='/bappoint' element={<AppointmentB />}></Route>
        <Route exact path= '/updatePatient' element={<UpdatePatient />}> </Route>
        
        <Route exact path='/forgetpassword' element={<ForgetPassword />}> </Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
