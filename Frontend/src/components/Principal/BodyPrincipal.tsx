import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import container from 'react-bootstrap/Container';
import row from 'react-bootstrap/Row';
import col from 'react-bootstrap/Col';
import Inventario from "../../img/test.png";
import Contabilidad from "../../img/report.png";
import POS from "../../img/pos-terminal.png";
import cliente from "../../img/review.png";
import Proveedores from "../../img/truck.png";
import Settings from "../../img/technical-support (2).png";
import '../../css/PageStyle/Principal.css';

const BodyPrincipal: React.FC =()=>(
    <div id="BodyPrincipalGlobal" className="container">
        <div className="row">
            <div className="card-deck col-sm-12">
                <div className="card car2 col-4">
                  <div className="card-body content-card">
                    <h5 className="card-title">Inventario</h5>
                    <img className="item-menu" src={Inventario} alt=""/>
                    <div className="col-12">
                        <a href="Inventario" className="btn btn-primary btn-cards">Ir</a>
                    </div>
                  </div>
                </div>
                <div className="card car2 col-4">
                    <div className="card-body content-card">
                      <h5 className="card-title">Contabilidad</h5>
                      <img className="item-menu" src={Contabilidad} alt=""/>
                        <div className="col-12">
                            <a href="Contabilidad" className="btn btn-primary btn-cards">Ir</a>
                        </div>
                    </div>
                </div>
                <div className="card car2 col-4">
                    <div className="card-body content-card">
                      <h5 className="card-title">POS</h5>
                      <img className="item-menu" src={POS} alt=""/>
                      <div className="col-12">
                        <a href="#" className="btn btn-primary btn-cards">Ir</a>
                      </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="row" id="Card2Options">
          <div className="card-deck col-sm-12">
            <div className="card car2 col-4">
              <div className="card-body content-card">
                <h5 className="card-title">Clientes</h5>
                <img className="item-menu" src={cliente} alt=""/>
                  <div className="col-12">
                    <a href="Clientes" className="btn btn-primary btn-cards">Ir</a>
                  </div>
              </div>
            </div>
            <div className="card car2 col-4">
                <div className="card-body content-card">
                  <h5 className="card-title">Proveedores</h5>
                  <img className="item-menu" src={Proveedores} alt=""/>
                      <div className="col-12">
                        <a href="Proveedores" className="btn btn-primary btn-cards">Ir</a>
                      </div>
                </div>
            </div>
            <div className="card car2 col-4">
                <div className="card-body content-card">
                  <h5 className="card-title">Settings</h5>
                  <img className="item-menu" src={Settings} alt=""/>
                      <div className="col-12">
                        <a href="#" className="btn btn-primary btn-cards">Ir</a>
                      </div>
                </div>
            </div>
          </div>
        </div>
    </div>
);
export default BodyPrincipal;