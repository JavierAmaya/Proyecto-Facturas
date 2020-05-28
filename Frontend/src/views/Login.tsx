import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import NavbarLogin,{} from "../components/Login/Login"

import Logo from "../img/logo-negro.png"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import '../components/Login/css/style.css';
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {IEmpleado} from "../interfaces/LoginEmpleado";
import {getEmpleado} from "../services/empleado";

const Login:React.FC=() =>{
    const [empleado, setEmpleado] = useState([]);
    const [update, setUpdate] = useState(true);
    
    
    
    useEffect(()=>{
        if(update){
            getEmpleado().then( r =>{                
                setUpdate(false);
                setEmpleado(r.data);
            }); 
        }      
    },[update]);
    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
    }, []);
    return(
        <div>
            <NavbarLogin></NavbarLogin>
            <Container className="container pt-5 mt-5 mb-5">
                <Row className="row" id="form-signin">
                    <div className="offset-lg-3 col-lg-6 ">
                    <form action="" className="card">
                        <Card className="card">
                        <div className="row text-center">
                            <div className="col-10 offset-1">
                            <div className="row mt-3 mb-5">
                                <div className="col-4 offset-4">
                                <img src={Logo} alt="" className="card-img-top mt-3 img-fluid"/>
                                </div>
                                <input type="email" name="" className="form-control mt-4" placeholder="Direccion de Correo Electronico" id="txt-correo"/>
                                <input type="password" name="" className="form-control mt-2" placeholder="Contraseña" id="txt-contrasenia"/>
                                <button className="btn btn-outline-primary btn-block mt-4" id="btn-inicio-sesion"  >Iniciar Sesion</button>
                                <div>
                                <small><a href="#">Do not you have an account yet</a></small>
                                </div>
                            </div>
                            </div>
                        </div>
                        </Card>
                    </form>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default Login;