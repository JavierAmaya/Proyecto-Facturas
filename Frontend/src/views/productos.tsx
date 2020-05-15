import React,{useState,useEffect} from "react";
import {} from "react-router-dom";
import {IProductos} from "../interfaces/productos";
import {getProductos} from "../services/productos"
import NavBarO from "../components/navbarO"
import Card3 from "../components/card3";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Productos:React.FC = () =>{

    const [productos, setProductos] = useState([]);
    const [update, setUpdate] = useState(true);

    useEffect(()=>{
        if(update){
            getProductos().then( r =>{                
                setUpdate(false);
                setProductos(r.data);
            }); 
        }      
    },[update]);
    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
    }, []);

    return(
        <div className="backgroundImg">
           <NavBarO/>
           <Container>
               <Row>
                    {productos.map((sup: IProductos, index)=>(
                         <Card3
                         name = {sup.NameProducto}
                         id = {sup.IDProducto}
                         precio = {sup.ValorVenta}
                         />
                    ))}  
               </Row>
           </Container>
       </div>
    )

}  

export default Productos;