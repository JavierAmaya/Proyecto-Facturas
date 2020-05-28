import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../img/logo-negro.png"
import LogoNavbar from "../../img/logo-blanco.png"
import container from 'react-bootstrap/Container';
import row from 'react-bootstrap/Row';
import col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

const NavbarLogin: React.FC = () =>(
  <div>
    <Navbar className="navbar navbar-dark" id="navbarLogin">
        <a className="navbar-brand anchor_navbar" href="Login">
          <img src={LogoNavbar} width="30" height="30" className="img-fluid" alt=""/>
          Ferreteria La Union
        </a>
    </Navbar>
  </div>
    
);
export default NavbarLogin;