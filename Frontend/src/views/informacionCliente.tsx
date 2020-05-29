import React, {useState,useEffect} from 'react';
import {} from "react-router-dom";
import NavBarO from "../components/navbarO";
import CardInformacionCliente from "../components/cardInfoCliente";
import {getInformacionClientes} from "../services/clientes";
import {IClienteInformacion} from "../interfaces/informacioncliente";
import {useParams} from "react-router-dom";

const InformacionCliente : React.FC = () => {

    const [detalleCliente, setDetalleCliente] = useState([]);
    const [update, setUpdate] = useState(true);

    const {id} = useParams();

    useEffect(()=>{
        if(update){
            getInformacionClientes(id).then( r =>{                
                setUpdate(false);
                setDetalleCliente(r.data);
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
            <NavBarO/>

            {detalleCliente.map((cli: IClienteInformacion , index)=>(
                <CardInformacionCliente
                NombreCliente = {cli.NombreCliente}
                ApellidoCliente= {cli.ApellidoCliente}
                EmailCliente = {cli.EmailCliente}
                RTN = {cli.RTN}
                Telefono = {cli.Telefono}
                Direccion1 = {cli.Direccion1}
                Direccion2 = {cli.Direccion2}
                cantidadFacturas = {cli.cantidadFacturas}
                />
            ))}
       </div>
    );
};

export default InformacionCliente;