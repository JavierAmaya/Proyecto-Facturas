import React from "react";
import proveedorImg from "../img/global.png";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const CardInformacion: React.FC = () => (
    <Container className="padding-items align-items-center mt-4">
        <Card className="container">
            <Row>
                <Col md="3" className="offset-1">
                <Card.Title> <h3 className="text-center mt-4">Nombre Producto</h3></Card.Title>
                    <Card.Img variant="top" src={proveedorImg} className="img-fluid mt-5" />
                </Col>
                <Col md="6" className="offset-1">
                <Card.Title> <h3 className="text-center mt-4">Informacion del Producto</h3></Card.Title>
                    <Table>
                        <tbody>
                            <tr>
                                <td className="pt-3"><Form.Label>Nombre del Producto:</Form.Label></td>
                                <td><Form.Control type="text" placeholder="Nombre del Producto" /></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Proveedor:</Form.Label></td>
                                <td><Form.Control type="text" placeholder="Proveedor" /></td>
                            </tr>
                            <tr>
                                <td><Form.Check type="checkbox" label="Impuesto"/></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Categoria:</Form.Label></td>
                                <td><Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Presentacion:</Form.Label></td>
                                <td><Form.Control type="text" placeholder="Presentacion" /></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Tamaño:</Form.Label></td>
                                <td><Form.Control type="text" placeholder="Tamaño" /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Card>
    </Container>
);

export default CardInformacion;