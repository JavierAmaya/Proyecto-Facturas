import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import NavbarP,{} from "../components/Navbar";
import BodyPrincipal,{} from "../components/Principal/BodyPrincipal"
import Header,{} from "../components/Principal/header"
const Principal:React.FC=() =>{
    return(
        <div>
            <NavbarP></NavbarP>
            <BodyPrincipal/>
            <Header/>
        </div>
    )
}
export default Principal;