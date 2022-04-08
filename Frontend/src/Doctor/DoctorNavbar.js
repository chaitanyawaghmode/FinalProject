import React from 'react'
import "../styles/Navbar.css";
import Logo from "../Assets/Logo.jpg"
import { Navbar,NavbarBrand, NavItem, NavLink } from 'reactstrap'
import Cookies from 'universal-cookie';

function DoctorNavbar() {
    const logo={
        height: "70px",
        width: "auto",
    }
    const clearLocal = () =>{
        const c= new Cookies();
        window.localStorage.clear();
        c.remove('d_id');
        c.remove('fname');
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
                    <NavLink href='/updateDoctor'>
                        Update Details
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/appointments'>
                        View Appointments
                    </NavLink>
                </NavItem>
              
               
                <NavItem>
                    <NavLink onClick={clearLocal} href='/login'>
                        Logout
                    </NavLink>
                </NavItem>
            </Navbar>
        </div>

    </div>
  )
}

export default DoctorNavbar