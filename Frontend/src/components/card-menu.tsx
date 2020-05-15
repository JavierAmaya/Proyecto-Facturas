import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";


interface IcardMenu{
    image:any
    title:string
    btn_go?:string
}


const CardMenu : React.FC<IcardMenu> = ({image,title,btn_go})=> (
    <div>
        <Container>
            <Row>
                <Card style={{ width: '22rem' }} className="card-menu content-card">
                  <Card.Body>
                  <Card.Title><h4>{title}</h4></Card.Title>
                  <Card.Img className="item-menu img-menu" variant="top" src={image} />
                  </Card.Body>
                  <Link to={`${btn_go}`}><Button variant="primary">GO</Button></Link>

                </Card>
            </Row> 
        </Container>

    </div>
);

export default CardMenu;