import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/main.css";
interface IdetallefacPagar{
    IDFactura:number;
    NombreProveedor: string;
    NombreContacto: string;
    EmailProveedor:string;
    City:string;
    CodigoPostal:number;
    Pais:string;
    Telefono:string;
    RTN:string;
    Direccion:string;
    FechaCreacion: string;
    FechaLimite: string;
}

const InfoFacPagar : React.FC<IdetallefacPagar> = ({IDFactura,FechaCreacion,FechaLimite,NombreProveedor,NombreContacto,EmailProveedor,City,CodigoPostal,Pais,Telefono,RTN,Direccion})=>(
<Card style={{ width: '100%' }}>
  <Card.Body>
    <Card.Title id="TitleRegistrarFactura" className="text-center">Ferreteria La Unión</Card.Title>
    <Card.Subtitle id="SubtitleRegistrarFactura" className="mb-2 text-center">Detalle Factura </Card.Subtitle>
    <Card.Subtitle id="SubtitleRegistrarFactura" className="mb-2 text-center">Factura #{IDFactura} </Card.Subtitle>
    <Card.Text>
        <Card.Header>
                <Breadcrumb  id="BreadcrumbListInvoice" >
                    <Breadcrumb.Item href="/Contabilidad">Contabilidad</Breadcrumb.Item>
                    <Breadcrumb.Item  href="/Contabilidad/FacturasPagar">Facturas Por Pagar</Breadcrumb.Item>
                    <Breadcrumb.Item active href="/Contabilidad/FacturasPagar/Detalle">Detalle Factura {IDFactura}</Breadcrumb.Item>
                </Breadcrumb>
            </Card.Header>
            <Card.Header>
                <Form>
                    <Row>
                        <Col id="margenesTotalFacRegis" md="2">
                            <Button style={{ width: '100%' }} variant="secondary">Editar Factura</Button>
                        </Col>
                        <Col md="2">
                            <Form>
                                <Form.Check checked type="switch"  id="Estado" label="pendiente"/>
                            </Form>
                        </Col>
                    </Row>
                </Form>
                <Form>
                    <Row>
                        <Col md="12">
                            <Card.Title className="text-center">Información Proveedor</Card.Title>
                        </Col>
                        <Col md="2">
                            <Form.Label className="col-12 text-right">Proveedor</Form.Label>
                            <Form.Label className="col-12 text-right">Email</Form.Label>
                            <Form.Label className="col-12 text-right">RTN</Form.Label>
                            <Form.Label className="col-12 text-right">Telefono</Form.Label>
                        </Col>
                        <Col md="4">
                            <Form.Control disabled value={NombreProveedor}></Form.Control>
                            <Form.Control disabled value={EmailProveedor}></Form.Control>
                            <Form.Control disabled value={RTN}></Form.Control>
                            <Form.Control disabled value={Telefono}></Form.Control>
                        </Col><Col md="2">
                            <Form.Label className="col-12 text-right">Nombre Contacto</Form.Label>
                            <Form.Label className="col-12 text-right">Pais/Cuidad</Form.Label>
                            <Form.Label className="col-12 text-right">CodigoPostal</Form.Label>
                            <Form.Label className="col-12 text-right">Dirrección</Form.Label>
                        </Col>
                        <Col md="4">
                            <Form.Control disabled value={NombreContacto}></Form.Control>
                            <Form.Control disabled value={Pais}></Form.Control>
                            <Form.Control disabled value={CodigoPostal}></Form.Control>
                            <Form.Control disabled value={Direccion}></Form.Control>
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
                            <Form.Control disabled value={FechaCreacion}/>
                        </Col>
                        <Col md="2">
                            <Form.Label className="col-12 text-right">Fecha Limite</Form.Label>
                        </Col>
                        <Col md="2">
                            <Form.Control disabled value={FechaLimite}/>
                        </Col>
                        <Col md="2">
                            <Form.Label className="col-12 text-right">Tipo Factura</Form.Label>
                        </Col>
                        <Col md="2">
                            <Form.Control disabled value="Adeudada"></Form.Control>
                        </Col>
                    </Row>
                </Form>
            </Card.Header>
            <Card.Header>
                <Form>
                    <Row>
                        <Col md="12">
                            <Card.Title className="text-center">Pagos o Anticipos</Card.Title>
                        </Col>
                        <Col md="2">
                            <Form.Label className="col-12 text-right">Pagos o Anticipos</Form.Label>
                        </Col>
                        <Col md="2">
                            <Form.Control disabled value="0.00"/>
                        </Col>
                        <Col md="2">
                            <Form.Label className="col-12 text-right">Forma de pago</Form.Label>
                        </Col>
                        <Col md="2">
                            <Form.Control as="select" >
                                <option>Efectivo</option>
                                <option>Cheque</option>
                                <option>Deposito a cuenta</option>
                                <option selected> no realizado</option>
                            </Form.Control>
                        </Col>
                        <Col md="2">
                            <Form.Label className="col-12 text-right">Deuda</Form.Label>
                        </Col>
                        <Col md="2">
                            <Form.Control disabled value="0.00"></Form.Control>
                        </Col>
                    </Row>
                </Form>
            </Card.Header>
        </Card.Text>
  </Card.Body>
</Card>
);
export default InfoFacPagar;