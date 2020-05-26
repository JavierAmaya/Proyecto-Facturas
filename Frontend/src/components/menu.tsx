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
    <div className="menu">
     <Container>
          <Row>
              <CardDeck>
                  <CardMenu title="Inventario" image={ImageInventario} btn_go="/inventario/productos"></CardMenu>
                  <CardMenu title="Contabilidad" image={ImageContabilidad} btn_go="/contabilidad"></CardMenu>
                  <CardMenu title="POS" image={ImagePOS} btn_go="/pos"></CardMenu>
              </CardDeck>
              <CardDeck>
                  <CardMenu title="Clientes" image={ImageClientes} btn_go="/clientes"></CardMenu>
                  <CardMenu title="Proveedores" image={ImageProveedores} btn_go="/proveedores"></CardMenu>
                  <CardMenu title="Settings" image={ImageSettings} btn_go="/settings"></CardMenu>
              </CardDeck>
          </Row>
      </Container>
    </div>
);

export default Menu;