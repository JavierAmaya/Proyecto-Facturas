import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import ""
const NavbarP: React.FC = () =>(
    <Navbar className="navbar navbar-dark" id="navbarLogin">
         <a className="navbar-brand anchor_navbar" href="index.html">
           <img src="src/img/logo-blanco.png" width="30" height="30" className="img-fluid" alt=""/>
           Ferreteria La Union
         </a>
    </Navbar>
);
export default NavbarP;