import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardMenu from './card-menu'
import ImageInventario from "../img/test.png"
import ImageContabilidad from "../img/report.png"
import ImagePOS from "../img/pos-terminal.png"
import ImageClientes from "../img/review.png"
import ImageProveedores from "../img/truck.png"
import ImageSettings from "../img/technical-support (2).png"
import CardDeck from 'react-bootstrap/CardDeck';



const Menu: React.FC = () =>(
    <Container>

        <Row>
            <CardDeck>
                <CardMenu title="Inventario" image={ImageInventario}></CardMenu>
                <CardMenu title="Contabilidad" image={ImageContabilidad}></CardMenu>
                <CardMenu title="POS" image={ImagePOS}></CardMenu>
            </CardDeck>
            <CardDeck>
                <CardMenu title="Clientes" image={ImageClientes}></CardMenu>
                <CardMenu title="Proveedores" image={ImageProveedores}></CardMenu>
                <CardMenu title="Settings" image={ImageSettings}></CardMenu>
            </CardDeck>
        </Row>
    </Container>
);

export default Menu;