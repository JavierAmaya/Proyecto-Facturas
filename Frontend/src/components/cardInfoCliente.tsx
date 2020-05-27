import React from "react";
import proveedorImg from "../img/global.png";
import Card, { CardFooter } from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {IClienteInformacion} from "../interfaces/informacioncliente";



const CardInformacionCliente: React.FC<IClienteInformacion> = ({NombreCliente,ApellidoCliente,EmailCliente,RTN,Telefono,Direccion1,Direccion2,cantidadFacturas}) =>(
    <Container className="padding-items align-items-center mt-4">
        <Card className="container">
            <Row>
                <Col md="3" className="offset-1">
                <Card.Title> <h3 className="text-center mt-4">{NombreCliente} {ApellidoCliente}</h3></Card.Title>
                    <Card.Img variant="top" src={proveedorImg} className="img-fluid mt-5" />
                </Col>
                <Col md="6" className="offset-1">
                <Card.Title> <h3 className="text-center mt-4">Informacion del Proveedor</h3></Card.Title>
                    <Table>
                        <tbody>
                            <tr>
                                <td className="pt-3"><Form.Label>Nombre del Cliente:</Form.Label></td>
                                <td><Form.Control type="text" placeholder={NombreCliente} /></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Apellido del Cliente:</Form.Label></td>
                                <td><Form.Control type="text" placeholder={ApellidoCliente} /></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Correo:</Form.Label></td>
                                <td><Form.Control type="email" placeholder={EmailCliente} /></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>RTN:</Form.Label></td>
                                <td><Form.Control type="text" placeholder={RTN}/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Telefono:</Form.Label></td>
                                <td><Form.Control type="text" placeholder={Telefono} /></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Direccion 1:</Form.Label></td>
                                <td><Form.Control type="text" placeholder={Direccion1} /></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Direccion 2:</Form.Label></td>
                                <td><Form.Control type="text" placeholder={Direccion2} /></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Cantidad de Facturas:</Form.Label></td>
                                <td><Form.Control type="number" placeholder={cantidadFacturas} /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Card.Body className="align-self-start">
                <Button variant="warning">Editar Cliente</Button>
                <Button variant="danger" className="ml-2">Eliminar Cliente</Button>
            </Card.Body>
        </Card>
    </Container>
);

export default CardInformacionCliente;
