import React,{useState,useEffect} from "react";
import {getClientes} from "../services/clientes";
import NavBarO from "../components/navbarO"
import Card3 from "../components/card3";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabVertical from "../components/tabVertical";
import Footer from "../components/footer";
import FactForm from "../components/infoFactura"
const Factura:React.FC = () => {

    return(
        <div>
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
                                    <div>
                                        <FactForm></FactForm>
                                    </div>
                                       
                                </Row> 
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Footer/>
        </div>  
    );
}

export default Factura;
