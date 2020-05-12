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
    <div className="container pt-5 mt-5 mb-5">
      <div className="row" id="form-signin">
        <div className="offset-lg-3 col-lg-6 ">
          <form action="" className="card">
            <div className="card">
              <div className="row text-center">
                <div className="col-10 offset-1">
                  <div className="row mt-3 mb-5">
                    <div className="col-4 offset-4">
                      <img src={Logo} alt="" className="card-img-top mt-3 img-fluid"/>
                    </div>
                    <input type="email" name="" className="form-control mt-4" placeholder="Direccion De Correo Electronico o Usuario Asignado" id="CorreoLogin"/>
                    <input type="password" name="" className="form-control mt-2" placeholder="Contraseña" id="ContraseniaLogin"/>
                    <button className="btn btn-outline-primary btn-block mt-4"  id="btn-inicio-sesion">Iniciar Sesion</button>
                    <div>
                      <small><a href="#">Do not you have an account yet</a></small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    
);
export default NavbarLogin;