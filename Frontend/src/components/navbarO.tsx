import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from "../img/logo-blanco.png";
import cerrar_seccion from "../img/cerrar_seccion.png";
import cambiodeusuario from "../img/cambio-de-usuario2.png";

const NavBarO: React.FC = () => (
    <Navbar className="navbar" variant="dark" expand="lg">
        <Navbar.Brand href="/Main">
              <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top"/>{' '}
            Ferreteria La Unión
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/Inventario">Inventario</Nav.Link>
            <Nav.Link href="/Contabilidad">Contabilidad</Nav.Link>
            <NavDropdown title="Más" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"><img src={cambiodeusuario} alt=""/>{' '}Cambiar Usuario</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"><img src={cerrar_seccion} alt=""/>{' '}Cerrar Sesión</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
   </Navbar>
);
export default NavBarO;