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
    id:number
    precio:number
    url?:string
}

const Card3 : React.FC<ICardPropsProductos> = ({name,id,precio,url})=>(

    <Col className="padding-items" md="4">
        <Card>
            <Row>
                <Col md="5">
                    <Card.Img variant="top" src={proveedorImg} />
                </Col>
                <Col md="7">
                <Card.Title>{name}</Card.Title>
                    <small><p className="card-text"><strong>Codigo: </strong>{id}</p></small>
                    <small><p className="card-text"><strong>Precio:</strong> L. {precio}.00</p></small>
                    <Link to={`${url}/${id}`}><Button variant="link">Mas Informacion...</Button></Link>
                </Col>
            </Row>
        </Card>
    </Col>
);

export default Card3;