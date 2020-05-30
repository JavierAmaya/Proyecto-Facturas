import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import NavBarO from "../components/navbarO";
import TabVertical from "../components/tabVertical";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Footer from "../components/footer";
import InfoFacPagar from "../components/cardInfoFacturaPagar";
import ProductoFacPagar from "../components/cardInfoProductoFacturaPagar";

import {IFacturasPagarInfo} from "../interfaces/facturasporpagarInfo";
import {getinfoFacturasPagar} from "../services/factura";

import {IFacturasPagarInfoProducto} from "../interfaces/facturasporpagarInfoProducto";
import {getinfoFacturasProducto} from "../services/factura";

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ModDellateFacturaPagar:React.FC=() =>{
    const [factura, setFacturas] = useState([]);
    const [update, setUpdate] = useState(true);
    const {id}=useParams();
    useEffect(()=>{
        if(update){
            getinfoFacturasPagar(id).then( r =>{
                setFacturas(r.data);
            }); 
        }      
    },[]);
    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
    }, []);

    const [productos, setProductos] = useState([]);
    const [cleanUp, setCleanUp] = useState(true);

    useEffect(()=>{
            getinfoFacturasProducto(id).then( c =>{
                setProductos(c.data);
            }); 
        },[]);
    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
    }, []);


    return(
        <div >
            <NavBarO/>
            <Row style={{width:'100%'}}>
                <Col className="backgroundTap" md="2">
                    <TabVertical/> 
                </Col>
                <Col className="background" md="10" style={{overflow:'auto',height: '842px'}}>
                    {factura.map((fac: IFacturasPagarInfo,index)=>(
                    <InfoFacPagar
                    IDFactura={fac.IDFactura}
                    NombreProveedor={fac.NombreProveedor}
                    NombreContacto={fac.NombreContacto}
                    EmailProveedor={fac.EmailProveedor}
                    City={fac.City}
                    CodigoPostal={fac.CodigoPostal}
                    Pais={fac.Pais}
                    Telefono={fac.Telefono}
                    RTN={fac.RTN}
                    Direccion={fac.Direccion}
                    FechaCreacion={fac.FechaCreacion}
                    FechaLimite={fac.FechaLimite}
                    /> ))}
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Text>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Producto</th>
                                            <th>Cantidad</th>
                                            <th>Precio</th>
                                            <th>Impuesto</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {productos.map((facP: IFacturasPagarInfoProducto)=>(
                                                            <ProductoFacPagar
                                                            NameProducto={facP.NameProducto}
                                                            Cantidad={facP.Cantidad}
                                                            ValorCompra={facP.ValorCompra}
                                                            impuesto={facP.impuesto}
                                                            Monto={facP.Monto}
                                                            /> 
                                        ))}
                                    </tbody>
                                </Table>
                                <Card.Header>
                                    <Form>
                                        <Row>
                                            <Col id="margenesTotalFacRegis" md="2">
                                                <Form.Label className="col-12 text-right">Importe Excento</Form.Label>
                                                <Form.Label className="col-12 text-right">Importe Gravado</Form.Label>
                                                <Form.Label className="col-12 text-right">ISV(15%)</Form.Label>
                                                <Form.Label className="col-12 text-right">Subtotal</Form.Label>
                                                <Form.Label className="col-12 text-right">Total A Pagar</Form.Label>
                                            </Col>
                                            <Col md="2">
                                                <Form.Label className="col-12 text-right">0.00</Form.Label>
                                                <Form.Label className="col-12 text-right">0.00</Form.Label>
                                                <Form.Label className="col-12 text-right">0.00</Form.Label>
                                                <Form.Label className="col-12 text-right">0.00</Form.Label>
                                                <Form.Label className="col-12 text-right">0.00</Form.Label>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Card.Header>
                            </Card.Text>
                        </Card.Body>
                        <Form>
                            <Row>
                                <Col md="10">
                                    <Form.Label>La Factura es beneficio de todos, "Exijala"</Form.Label>
                                </Col>
                                <Col md="2">
                                    <Button variant="outline-primary">Registrar Factura</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
            <Footer/>
        </div>
    )
}
export default ModDellateFacturaPagar;