import React from 'react'
import Cookies from 'universal-cookie';
import "../styles/Navbar.css";
import Logo from "../Assets/Logo.jpg"
import { Navbar,NavbarBrand, NavItem, NavLink } from 'reactstrap'

function PatientNavbar() {
    const logo={
        height: "70px",
        width: "auto",
    }
    const clearLocal = () =>{
        const c = new Cookies();
        window.localStorage.clear();
        c.remove('p_id');

    }
  return (
    <div>
        <div>
        <Navbar color='dark'
            dark expand='sm'
            fixed='top'
            full
            >
                <NavbarBrand href="/">
                    {/* VET US */}
                    <img src={Logo} style={logo}/>
                </NavbarBrand>
                <NavItem>
                    <NavLink href='/updatePatient'>
                        Update Details
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/vdoctor'>
                        View Doctors
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={clearLocal} href='/plogin'>
                        Logout
                    </NavLink>
                </NavItem>
            </Navbar>
        </div>
    </div>
  )
}

export default PatientNavbar