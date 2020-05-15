import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

interface IcardMenu{
    image:any
    title:string
}


const CardMenu : React.FC<IcardMenu> = ({image,title})=> (
    <div>
        <Container>
            <Row>
            <Card style={{width: '22rem'}} className="card-menu content-card">
              <Card.Body>
              <Card.Title><h4>{title}</h4></Card.Title>
              <Card.Img className="item-menu img-menu" variant="top" src={image} />
              </Card.Body>
              <Button variant="primary">Go</Button>
            </Card>
            </Row> 
            <Row>
            </Row>
        </Container>
    </div>
);

export default CardMenu;