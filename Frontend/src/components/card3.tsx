import React from "react";
import proveedorImg from "../img/global.png";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



interface ICardPropsProductos{
    name:string
    id?:number
    precio?:number
    rtn?:string
    direccion?:string

}

const Card3 : React.FC<ICardPropsProductos> = ({name,id,precio,rtn,direccion})=>(
    <Col className="padding-items" md="4">
        <Card>
            <Row>
                <Col md="5">
                    <Card.Img variant="top" src={proveedorImg} />
                </Col>
                <Col md="7">
                <Card.Title>{name}</Card.Title>

                    <small><p className="card-text">
                        
                    </p></small>
                    <small><p className="card-text"><strong>Precio:</strong> L. {precio}.00</p></small>
                </Col>
            </Row>
        </Card>
    </Col>
);

export default Card3;