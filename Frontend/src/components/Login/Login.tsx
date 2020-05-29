import React, { useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../img/logo-negro.png"
import LogoNavbar from "../../img/logo-blanco.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import {requestLogin, postLogin} from "../../services/login";
import useFormHelpers from "../../helpers/useFormHelpers";
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ModalLogin from "../modal";





const NavbarLogin: React.FC= () =>{
  const [showmodal,setShowmodal] = useState(false);
  const [message,setMessage] = useState("");
  const [redirectHome, setRedirectHome] = useState(false);

  const history = useHistory();

  const states = useState({
    correo:"" ,
    password: ""
  });

  const{
    values,
    handleChange,
    updateValues
  } = useFormHelpers(states)
  
  function enviar() {
    postLogin(values).then(value => {
     if(value.data.successed){
        setRedirectHome(true);
        setShowmodal(true);
      }else{
        setMessage("El usuario no existe");
      }
    })
  }
  
  
  return(
    
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
                      <input 
                        type="email"  
                        className="form-control mt-4" 
                        placeholder="Direccion de Correo Electronico" 
                        id="txt-correo" 
                        name="correo"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                      <input 
                        type="password" 
                        className="form-control mt-2" 
                        placeholder="Contraseña" 
                        id="txt-contrasenia"
                        name="password"
                        defaultValue={values.password} 
                        onChange={handleChange}
                      />
                      <Link className="btn  btn-block mt-4" to={"/main"}><Button onClick={enviar}>Iniciar Sesion</Button></Link>
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
}
export default NavbarLogin;