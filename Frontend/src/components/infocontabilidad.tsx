import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ModuloConta from './Card-contabilidad';
import ImagePOrcobrar from "../img/buy.png";
import ImagePorPagar from "../img/cobrar.png";
import "../css/main.css";
import Card from "react-bootstrap/Card";
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const InfoMenuFacturas: React.FC = () =>(
    <Col md="10"  id="height_Auto">
        <div> 
            <Container>
                <Row>
                    <Col md="12" id="titleFrom">
                    <Card>
                        <h2 className="TextConta">Ferreteria la Unión</h2>
                        <Breadcrumb  id="BreadcrumbListInvoice" >
                            <Breadcrumb.Item  href="main">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active href="Contabilidad">
                                Contabilidad
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Card>
                    </Col>
                    <ModuloConta title="Facturas De Cliente" NFacturas={25} MFacturas={30875} NFactPend={5} CFactPend={10587} imagen={ImagePOrcobrar} Url="contabilidad/facturasCobrar" encabezado="Venta"/>
                    <ModuloConta title="Facturas De Proveedor" NFacturas={7} MFacturas={75875} NFactPend={6} CFactPend={40870} imagen={ImagePorPagar} Url="contabilidad/facturasPagar" encabezado="Compra"/>
                    <ModuloConta title="Prestamo Bancos" NFacturas={0} MFacturas={0} NFactPend={0} CFactPend={0} imagen={ImagePorPagar} Url="contabilidad/factura" encabezado="/Banca"/>
                </Row>
            </Container>
        </div>
    </Col>
);

export default InfoMenuFacturas;