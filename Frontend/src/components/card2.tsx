import React from "react";
import proveedorImg from "../img/global.png";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



interface ICardPropsSupplier{
    title:string
    rtn:string
    direccion:string
}

const Card2 : React.FC<ICardPropsSupplier> = ({title,rtn,direccion})=>(

    <Col className="padding-items" md="4">
        <Card>
            <Row>
                <Col md="5">
                    <Card.Img variant="top" src={proveedorImg} />
                </Col>
                <Col md="7">
                <Card.Title>{title}</Card.Title>
                    <small><p className="card-text"><strong>RTN: </strong>{rtn}</p></small>
                    <small><p className="card-text"><strong>Dirección:</strong>{direccion}</p></small>
                </Col>
            </Row>
        </Card>
    </Col>
);

export default Card2;