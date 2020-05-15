import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ModuloConta from './section-contabilidad';
import ImagePOrcobrar from "../img/buy.png";
import ImagePorPagar from "../img/cobrar.png";
import "../css/main.css";
import Card from "react-bootstrap/Card";
const InfoMenuFacturas: React.FC = () =>(
    <Col className="col-sm-8 col-md-8 col-lg-9 col-xl-10 col-12" id="height_Auto">
        <div> 
            <Container>
                <Row>
                    <div className="col-12" id="titleFrom">
                    <Card>
                        <h2 className="TextConta">BIENVENIDO AL MODULO DE CONTABILIDAD</h2>
                        <h4 className="TextConta">A continuación apareceran los apartados de este modulo:</h4>
                    </Card>
                    </div>
                    <ModuloConta title="Facturas De Cliente" NFacturas={25} MFacturas={30875} NFactPend={5} CFactPend={10587} imagen={ImagePOrcobrar} encabezado="Venta"/>
                    <ModuloConta title="Facturas De Proveedor" NFacturas={7} MFacturas={75875} NFactPend={6} CFactPend={40870} imagen={ImagePorPagar} encabezado="Compra"/>
                    <ModuloConta title="Prestamo Bancos" NFacturas={0} MFacturas={0} NFactPend={0} CFactPend={0} imagen={0} encabezado="Banca"/>
                </Row>
            </Container>
        </div>
    </Col>
);

export default InfoMenuFacturas;