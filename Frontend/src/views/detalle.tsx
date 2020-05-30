import React, {useState,useEffect} from 'react';
import {} from "react-router-dom";
import NavBarO from "../components/navbarO"
import CardInformacion from "../components/cardInformacion";
import {getDetalleProducto} from "../services/productos";
import {IdetalleProducto} from "../interfaces/detalleproducto";
import {useParams} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabVertical from '../components/tabVertical';
import Container from 'react-bootstrap/Container';
import Footer from '../components/footer';

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
        <Row>
                <Col className="backgroundTap" md="2">
                        <TabVertical/> 
                </Col>
                <Col className="background">
                    <Container className="mb-4 ">
                        {detalleProducto.map((pro: IdetalleProducto, index)=>(
                            <CardInformacion 
                            NameProducto = {pro.NameProducto}
                            NombreProveedor= {pro.NombreProveedor}
                            NameCategoria = {pro.NameCategoria}
                            ValorVenta = {pro.ValorVenta}
                            />
                        ))}
                    </Container>
                </Col>
            </Row>
            <Footer/>
    </div>
    );

};

export default DetalleInformacion;