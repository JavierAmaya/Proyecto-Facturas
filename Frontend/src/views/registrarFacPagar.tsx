import React,{useState,useEffect} from "react";
import NavBarO from "../components/navbarO"
import CardRegistrarFactura from "../components/cardFacturaPagar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabVertical from "../components/tabVertical";
import Footer from "../components/footer";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const RegistrarFacturaPagar:React.FC = () => {
    
    return(
        <div>
            <NavBarO/>
            <Row style={{width:'100%'}}>
                <Col className="backgroundTap" md="2">
                    <TabVertical/> 
                </Col>
                <Col className="background" md="10" style={{overflow:'auto',height: '842px'}}>
                    <CardRegistrarFactura/>
                </Col>
            </Row>
            <Footer/>
        </div>  
    );
}

export default RegistrarFacturaPagar;