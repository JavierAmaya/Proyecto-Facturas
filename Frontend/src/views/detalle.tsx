import React, {useState,useEffect} from 'react';
import {} from "react-router-dom";
import NavBarO from "../components/navbarO"
import CardInformacion from "../components/cardInformacion";
import {getDetalleProducto} from "../services/productos";
import {IdetalleProducto} from "../interfaces/detalleproducto";
import {useParams} from "react-router-dom";

const DetalleInformacion : React.FC = () => {
    
    const [detalleProducto, setDetalleProducto] = useState([]);
    const [update, setUpdate] = useState(true);

    const {id} = useParams();

    useEffect(()=>{
        if(update){
            getDetalleProducto(id).then( r =>{                
                setUpdate(false);
                setDetalleProducto(r.data);
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
        
        {detalleProducto.map((pro: IdetalleProducto, index)=>(
            <CardInformacion 
              NameProducto = {pro.NameProducto}
              NombreProveedor= {pro.NombreProveedor}
              NameCategoria = {pro.NameCategoria}
              ValorVenta = {pro.ValorVenta}
            />
        ))}
       
    </div>
    );

};

export default DetalleInformacion;