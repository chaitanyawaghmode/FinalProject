import React from 'react'
import Logo from "../../Assets/Logo.jpg"
import {NavLink} from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import { NavbarBrand } from 'reactstrap'
import "../../styles/Navbar.css";

export default function Header() {
  
  const logo={
    height: "70px",
    width: "auto",
}
  return (
  
    <div>
        <Navbar bg='dark' variant='dark'>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <NavbarBrand href="/">
                    {/* VET US */}
                    <img src={Logo} style={logo}/>
                </NavbarBrand>
              
                <Nav.Link><NavLink to="/login" className="linkclass">Doctor Login</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/register" className="linkclass">Doctor Register</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/plogin" className="linkclass">Veterinary Login</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/pregister" className="linkclass">Veterinary Register</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/about" className="linkclass">About</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/contact" className="linkclass">Contact</NavLink></Nav.Link>
                </Nav> 
            </Navbar.Collapse>
            
        </Navbar>
  
    </div>
  )
}


  