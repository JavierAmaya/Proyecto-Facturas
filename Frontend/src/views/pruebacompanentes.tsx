import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import NavBarO from "../components/navbarO";
import ManyInvoice from "../components/manyinvoice";


const Prueba:React.FC=() =>{
    return(
        <div>
            <NavBarO/>
            <ManyInvoice/>
        </div>
    )
}
export default Prueba;