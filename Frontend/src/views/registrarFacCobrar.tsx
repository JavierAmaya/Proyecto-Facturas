import React,{useState,useEffect} from "react";
import NavBarO from "../components/navbarO"
import CardRegistrarFactura from "../components/cardFacturaCobrar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabVertical from "../components/tabVertical";
import Footer from "../components/footer";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const RegistrarFacturaCobrar:React.FC = () => {
    
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
                                <Row className="mb-3">
                                    
                                    <CardRegistrarFactura/>
                                       
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

export default RegistrarFacturaCobrar;