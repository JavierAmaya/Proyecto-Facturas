import React from "react";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import  '../css/main.css';

const CardRegistrarFactura: React.FC = () => (
    <Card style={{ width: '100%' }}>
        <Card.Body>
            <Card.Title id="TitleRegistrarFactura" className="text-center">Ferreteria La Unión</Card.Title>
            <Card.Subtitle id="SubtitleRegistrarFactura" className="mb-2 text-center">Crear Factura</Card.Subtitle>
            <Card.Text>
                <Card.Header>
                    <Breadcrumb  id="BreadcrumbListInvoice" >
                        <Breadcrumb.Item href="/Contabilidad">Contabilidad</Breadcrumb.Item>
                        <Breadcrumb.Item  href="/Contabilidad/FacturasPagar">Facturas Por Pagar</Breadcrumb.Item>
                        <Breadcrumb.Item active href="/Contabilidad/FacturasPagar/Registrar">Registrar Factura</Breadcrumb.Item>
                    </Breadcrumb>
                    <Form>
                        <Row>
                            <Col md="2">
                            <Form.Label className="text-right">Proveedor</Form.Label>
                            </Col>
                            <Col md="4">
                                <Form.Control as="select" >
                                    <option>Proveedores</option>
                                </Form.Control>
                            </Col>
                            <Col md="4">
                                <Form.Control disabled value="Nombre Contacto" >
                                </Form.Control>
                            </Col>
                            <Col md="2">
                                <Button variant="secondary">Editar</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Header>
                <Card.Header>
                    <Form>
                        <Row>
                            <Col md="12">
                                <Card.Title className="text-center">Información Proveedor</Card.Title>
                            </Col>
                            <Col md="2">
                                <Form.Label className="col-12 text-right">Email</Form.Label>
                                <Form.Label className="col-12 text-right">RTN</Form.Label>
                                <Form.Label className="col-12 text-right">Telefono</Form.Label>
                            </Col>
                            <Col md="4">
                                <Form.Control disabled value=""></Form.Control>
                                <Form.Control disabled value=""></Form.Control>
                                <Form.Control disabled value=""></Form.Control>
                            </Col><Col md="2">
                                <Form.Label className="col-12 text-right">Pais/Cuidad</Form.Label>
                                <Form.Label className="col-12 text-right">CodigoPostal</Form.Label>
                                <Form.Label className="col-12 text-right">Dirrección</Form.Label>
                            </Col>
                            <Col md="4">
                                <Form.Control disabled value=""></Form.Control>
                                <Form.Control disabled value=""></Form.Control>
                                <Form.Control disabled value=""></Form.Control>
                            </Col>
                        </Row>
                    </Form>
                </Card.Header>
                <Card.Header>
                    <Form>
                        <Row>
                            <Col md="12">
                                <Card.Title className="text-center">Información Factura</Card.Title>
                            </Col>
                            <Col md="2">
                                <Form.Label className="col-12 text-right">Fecha Creación</Form.Label>
                            </Col>
                            <Col md="2">
                                <Form.Control></Form.Control>
                            </Col>
                            <Col md="2">
                                <Form.Label className="col-12 text-right">Fecha Limite</Form.Label>
                            </Col>
                            <Col md="2">
                                <Form.Control></Form.Control>
                            </Col>
                            <Col md="2">
                                <Form.Label className="col-12 text-right">Tipo Factura</Form.Label>
                            </Col>
                            <Col md="2">
                                <Form.Control disabled value="Adeudada"></Form.Control>
                            </Col>
                        </Row>
                    </Form>
                </Card.Header><Card.Header>
                    <Form>
                        <Row>
                            <Col md="12">
                                <Card.Title className="text-center">Producto</Card.Title>
                            </Col>
                            <Col md="6">
                                <Form.Control as="select" >
                                    <option>Producto</option>
                                </Form.Control>
                            </Col>
                            <Col md="6">
                                <Form.Control disabled value="{Categoria}"></Form.Control>
                            </Col>
                            <Col md="12">
                                <Form.Label>Descripción del producto</Form.Label>
                                <Form.Control id="tareatextRegistrarFac" as="textarea"/>
                            </Col>
                            
                            <Col md="2">
                                <Form.Label className="col-12 text-right">Cantidad</Form.Label>
                            </Col>
                            <Col md="2">
                                <Form.Control></Form.Control>
                            </Col>
                            <Col md="2">
                                <Form.Label className="col-12 text-right">Precio Compra</Form.Label>
                            </Col>
                            <Col md="2">
                                <Form.Control disabled value="Precio"></Form.Control>
                            </Col>
                            <Col md="4">
                                <Button variant="secondary">Agregar Producto A la Lista</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Header>
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
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        </tr>
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
        </Card.Body>
    </Card>
);

export default CardRegistrarFactura;
