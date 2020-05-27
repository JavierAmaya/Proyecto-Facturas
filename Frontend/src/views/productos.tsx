import React,{useState,useEffect} from "react";
import {} from "react-router-dom";
import {IProductos} from "../interfaces/productos";
import {getProductos} from "../services/productos"
import NavBarO from "../components/navbarO"
import Card3 from "../components/card3";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabVertical from "../components/tabVertical";
import Footer from "../components/footer"
import Button from "react-bootstrap/Button";

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
           <Row>
                <Col className="backgroundTap" md="2">
                    <TabVertical/> 
                </Col>
                <Col className="background" md="10">
                     <Container>
                         <Row>
                             <Col>
                                 <Row>
                                     {productos.map((sup: IProductos, index)=>(
                                         <Card3
                                         name = {sup.NameProducto}
                                         id = {sup.IDProducto}
                                         precio = {sup.ValorVenta}
                                         key = {sup.IDProducto}
                                         url = "producto"
                                         />
                                    
                                    ))} 
                                </Row> 
                             </Col>
                         </Row>
                         <Row className="mt-3 mb-3 ml-2">
                            <Button variant="primary">Añadir Nuevo Producto</Button>
                         </Row>
                     </Container>
                </Col>
           </Row>
           <Footer/>
       </div>
    )

}  

export default Productos;