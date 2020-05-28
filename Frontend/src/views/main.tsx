import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Menu from "../components/menu";
import NavBarO from "../components/navbarO";


const Main:React.FC =() =>{
    return(
        <div>
            <NavBarO/>
            <Menu/>
        </div>
    )

}

export default Main;