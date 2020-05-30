import React from "react";
import proveedorImg from "../img/global.png";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";



interface ICardPropsProductos{
    name:string
    id?:number
    precio?:number
    url?:string
    rtn?: string
    propsProducto? : boolean
    descripcion?:string
    telefono?:string
    nombreContacto?:string
    pais?:string
}

const Card3 : React.FC<ICardPropsProductos> = ({name,id,precio,url,rtn, propsProducto, descripcion, telefono, nombreContacto, pais})=>(
    <Col className="padding-items" md="4">
        <Card>
            <Row>
                <Col md="5">
                    <Card.Img variant="top" src={proveedorImg} />
                </Col>
                <Col md="7">
                <Card.Title>{name}</Card.Title>
                    {(nombreContacto) && (pais) && (
                        <Card.Text>
                           <small><p className="card-text"><strong>Contacto:</strong>{nombreContacto}</p></small>
                           <small><p className="card-text"><strong>País:</strong>{pais}</p></small>
                           <small><p className="card-text"><strong>Teléfono:</strong>{telefono}</p></small>
                        </Card.Text>
                    )} 
                    
                    {(telefono) && (rtn) && (
                     <Card.Text>
                        <small><p className="card-text"><strong>Teléfono:</strong>{telefono}</p></small>
                        <small><p className="card-text"><strong>RTN:</strong>{rtn}</p></small>
                     </Card.Text>
                    )} 


                    {(propsProducto) && (
                        <small><p className="card-text"><strong>Precio:</strong> L. {precio}.00</p></small>
                    )}
                    {(descripcion) && (
                        <small><p className="card-text"><strong>Descripción:</strong>{descripcion}</p></small>
                    )}


                    <Link to={`${url}/${id}`}><Button variant="link">Mas Informacion...</Button></Link>
                </Col>
            </Row>
       </Card>
    </Col>
);


export default Card3;