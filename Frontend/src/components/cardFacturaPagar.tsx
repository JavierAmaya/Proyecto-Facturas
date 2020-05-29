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
/*<Container className="padding-items align-items-center mt-4">
        <Card className="container pl-0 pr-0">
            <Card.Body className="align-self-center">
            <Form>
                <Row>
                    <Col md="6">
                    <Form.Label>Proveedor</Form.Label>
                    </Col>
                    <Col md="6">
                    <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
            </Form>


                <div>
                    <h2 className="text-center">Ferreteria La Unión</h2>
                    <h1 className="text-center">Crear Factura</h1>
                </div>
                <Breadcrumb  id="BreadcrumbListInvoice" >
                    <Breadcrumb.Item href="/Contabilidad">Contabilidad</Breadcrumb.Item>
                    <Breadcrumb.Item  href="Contabilidad/FacturasPagar">Facturas Por Pagar</Breadcrumb.Item>
                    <Breadcrumb.Item active href="Contabilidad/FacturasPagar/Registrar">Registrar Factura</Breadcrumb.Item>
                </Breadcrumb>
                <hr  style={{
                    color: '#ff0000',
                    backgroundColor: '#ff0000',
                    height: .4,
                    width: 1000,
                    borderColor : '#ff0000'
                }}/>
                <div>
                    <Row className="align-items-center ml-5 pl-4">
                        <Col>
                            <Form.Group controlId="slc-categoria-producto">
                                <Form.Label>Proveedor:</Form.Label>
                                <Form.Control as="select" custom >
                                    <option>Nombre Proveedor</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Precio:</Form.Label>
                                <Form.Control type="text" placeholder="Precio" className="required"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Cantidad:</Form.Label>
                                <Form.Control type="text" placeholder="Cantidad" className="required"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="success" className="mt-2">Agregar</Button>
                        </Col>
                    </Row>
                </div>
                <hr  style={{
                    color: '#ff0000',
                    backgroundColor: '#ff0000',
                    height: .1,
                    width: 1000,
                    borderColor : '#ff0000'
                }}/>
                <div className="align-items-center ml-5 mr-5 pl-5">
                    <Row className="align-items-center ml-5 mr-5 pl-5">
                        <Col md="5">
                            <Form.Group controlId="slc-categoria-producto">
                                <Form.Label> <strong>Factura #:</strong> ##############</Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Dirección:</strong> La Unión, Olancho</Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Teléfono:</strong> 9968-1203</Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Fecha de Emision:</strong> 9968-1203</Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>CAI:</strong>123HJKB1NB12</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col md="5">
                            <Form.Group>
                                <Form.Label><strong>Cliente:</strong></Form.Label>
                                <Form.Control as="select" custom>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Dirección:</strong></Form.Label>
                                <Form.Control type="text" placeholder="Direccion" className="required"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>RTN:</strong></Form.Label>
                                <Form.Control type="text" placeholder="RTN" className="required"/>
                            </Form.Group>
                        </Col>
                    </Row>
                </div>
                <hr  style={{
                    color: '#ff0000',
                    backgroundColor: '#ff0000',
                    height: .1,
                    width: 1000,
                    borderColor : '#ff0000'
                }}/>
                <div className="ml-4 mr-4 pl-4 pr-4 text-center">
                    <Table bordered size="sm">
                        <thead>
                            <tr>
                                <th>Cantidad</th>
                                <th>Descripcion</th>
                                <th>Precio Unitario</th>
                                <th>Total lps.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Lorem</td>
                                <td>lps.12312</td>
                                <td>lps.167312</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Lorem</td>
                                <td>lps.12312</td>
                                <td>lps.167312</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Lorem</td>
                                <td>lps.12312</td>
                                <td>lps.167312</td>
                            </tr>
                        </tbody>
                        
                    </Table>
                </div>
                <Row>
                            <Col className="col-sm-6"></Col>
                            <Col className="col-sm-3 text-center">
                                <ul className="list-unstyled">
                                  <li>Importe Excento</li>
                                  <li>Importe Gravado 15%</li>
                                  <li>15% ISV</li>
                                  <li>Total a pagar</li>
                                </ul>
                            </Col>
                            <Col className="col-sm-2 text-center">
                                <ul className="list-unstyled">
                                  <li>L.123</li>
                                  <li>L.1232</li>
                                  <li>L. 1231</li>
                                  <li>Lps.475465</li>
                                </ul>
                            </Col>
                            <small>La Factura es beneficio de todos, "Exijala"</small>
                            
                          </Row>
            </Card.Body>
            <div className="modal-footer">
                          <button type="button" className="btn btn-primary">Registrar Factura</button>
            </div>
        </Card>
        
    </Container>*/