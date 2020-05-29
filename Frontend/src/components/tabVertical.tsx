import React from "react";
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


const TabVertical:React.FC = () => (
    <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
        <Row>
            <Col>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link className="itemTap" eventKey="home" href="/main">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className="itemTap" eventKey="inventario" href="/inventario">Inventario</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className="itemTap" eventKey="contabilidad" href="/contabilidad">Contabilidad</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className="itemTap" eventKey="pos" href="/pos">POS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className="itemTap" eventKey="clientes" href="/clientes">Clientes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className="itemTap" eventKey="proveedores" href="/proveedores">Proveedores</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
        </Row>
    </Tab.Container>
);


export default TabVertical;