import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import NavbarLogin,{} from "../components/Login/Login"


const Login:React.FC=() =>{
    return(
        <div>
            <NavbarLogin></NavbarLogin>
        </div>
    )
}
export default Login;