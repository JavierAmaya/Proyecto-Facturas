import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import NavBarO from "../components/navbarO";
import ModalNewInvoice from  "../components/modalNuevaFactura"
import ManyInvoice from "../components/manyinvoicePay";
import InfoMenuFacturas from "../components/infocontabilidad";
import TabVertical from "../components/tabVertical";


const Prueba:React.FC=() =>{
    return(
        <div>
            <NavBarO/>
            <ModalNewInvoice/>
            
        </div>
    )
}
export default Prueba;