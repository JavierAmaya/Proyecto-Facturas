import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Menu from "../components/menu";
import NavBarO from "../components/navbarO";
import Footer from "../components/footer"


const Main:React.FC =() =>{
    return(
        <div>
            <NavBarO/>
            <Menu/>
            <Footer/>
        </div>
    )

}

export default Main;