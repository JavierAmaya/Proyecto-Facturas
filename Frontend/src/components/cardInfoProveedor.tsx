import React from "react";
import proveedorImg from "../img/global.png";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {IProveedorInformacion} from "../interfaces/informacionproveedor";



const CardInformacionProveedor: React.FC<IProveedorInformacion> = ({NombreProveedor,NombreContacto,EmailProveedor,RTN,Telefono,Pais,City,CodigoPostal,Direccion,CantidadProductos}) =>(
    <Container className="padding-items align-items-center mt-4">
        <Card className="container">
            <Row>
                <Col md="3" className="offset-1">
                <Card.Title> <h3 className="text-center mt-4">{NombreProveedor}</h3></Card.Title>
                    <Card.Img variant="top" src={proveedorImg} className="img-fluid mt-5" />
                </Col>
                <Col md="6" className="offset-1">
                <Card.Title> <h3 className="text-center mt-4">Informacion del Proveedor</h3></Card.Title>
                    <Table>
                        <tbody>
                            <tr>
                                <td className="pt-3"><Form.Label>Nombre del Proveedor:</Form.Label></td>
                                <td><Form.Control type="text" placeholder={NombreProveedor} /></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Nombre de Contacto:</Form.Label></td>
                                <td><Form.Control type="text" placeholder={NombreContacto} /></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Correo:</Form.Label></td>
                                <td><Form.Control type="email" placeholder={EmailProveedor} /></td>
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
                                <td className="pt-3"><Form.Label>Pais:</Form.Label></td>
                                <td><Form.Control type="text" placeholder={Pais} /></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Ciudad:</Form.Label></td>
                                <td><Form.Control type="text" placeholder={City} /></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Codigo Postal:</Form.Label></td>
                                <td><Form.Control type="number" defaultValue={CodigoPostal}/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Direccion:</Form.Label></td>
                                <td><Form.Control type="text" placeholder={Direccion} /></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Cantidad de Productos:</Form.Label></td>
                                <td><Form.Control type="number" placeholder={CantidadProductos} /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Card.Body className="align-self-start">
                <Button variant="warning">Editar Proveedor</Button>
                <Button variant="danger" className="ml-2">Eliminar Proveedor</Button>
            </Card.Body>
        </Card>
    </Container>
);

export default CardInformacionProveedor;