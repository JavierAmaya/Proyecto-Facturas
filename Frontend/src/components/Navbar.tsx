import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import LogoNavbar from "../img/logo-blanco.png";
import container from 'react-bootstrap/Container';
import row from 'react-bootstrap/Row';
import col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/PageStyle/Navbar.css';
const NavbarP: React.FC = () =>(
  <div>
    <Navbar id="ColorNavbar" className=" navbar navbar-expand-lg navbar-dark">
         <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                  <a className="navbar-brand anchor_navbar" href="Principal">
                    <img src={LogoNavbar} width="30" height="30" className="d-inline-block align-top" alt=""/>
                    Ferreteria La Union
                  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Inventario">Inventario</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="Contabilidad">Contabilidad</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">WebApp</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="Login">Salir</a>
              </li>
            </ul>
          </div>
       </Navbar>
  </div>
);
export default NavbarP;