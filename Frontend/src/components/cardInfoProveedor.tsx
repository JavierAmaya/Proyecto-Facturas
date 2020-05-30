import React, { useState } from "react";
import proveedorImg from "../img/global.png";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {IProveedorInformacion} from "../interfaces/informacionproveedor";
import useFormHelpers from "../helpers/useFormHelpers";
import {updateProveedor} from "../services/proveedores";
import Modal from "react-bootstrap/Modal";
import {deleteProveedor} from "../services/proveedores";

function ModalActualizarProveedor() {
    const [show, setShow] = useState(false);
    const states = useState({
        NombreContacto: "",
        EmailProveedor: "",
        Telefono: "",
        Direccion: ""
      });
    

      const{
        values,
        handleChange,
        updateValues
      } = useFormHelpers(states)

      const id = window.location.pathname;

      const idcliente = id.split("/");

      const idoficial = idcliente[2];
      
      function editarProveedor() {
        updateProveedor(idoficial,values).then(value => {
            alert("Proveedor actualizado exitosamente!");
            window.location.reload(false);
        })
      }
  
    return (
      <>
        <Button variant="warning" onClick={() => setShow(true)}>
          Editar
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Editar Cliente
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group controlId="txt-correo-cliente">
                    <Form.Label>Nombre de Contacto:</Form.Label>
                    <input 
                        type="email"  
                        className="form-control mt-4" 
                        placeholder="Nombre del Contacto" 
                        id="txt-correo" 
                        name="NombreContacto"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-telefono-cliente">
                    <Form.Label>Correo Electronico:</Form.Label>
                    <input 
                        type="email"  
                        className="form-control mt-4" 
                        placeholder="Correo Electronico" 
                        id="txt-correo" 
                        name="EmailProveedor"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-direccion1-cliente">
                    <Form.Label>Telefono:</Form.Label>
                    <input 
                        type="email"  
                        className="form-control mt-4" 
                        placeholder="Telefono" 
                        id="txt-correo" 
                        name="Telefono"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-direccion2-proveedor">
                    <Form.Label>Direccion:</Form.Label>
                    <input 
                        type="email"  
                        className="form-control mt-4" 
                        placeholder="Direccion" 
                        id="txt-correo" 
                        name="Direccion"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>   
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={editarProveedor}>
                Editar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  function eliminarProveedor(){
    const id = window.location.pathname;

    const idcliente = id.split("/");

    const idoficial = idcliente[2];

    deleteProveedor(idoficial).then(value => {
        window.location.replace("http://localhost:3000/proveedores");
  });
  }

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
                                <td><Form.Control type="text" value={NombreProveedor} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Nombre de Contacto:</Form.Label></td>
                                <td><Form.Control type="text" value={NombreContacto} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Correo:</Form.Label></td>
                                <td><Form.Control type="email" value={EmailProveedor} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>RTN:</Form.Label></td>
                                <td><Form.Control type="text" value={RTN} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Telefono:</Form.Label></td>
                                <td><Form.Control type="text" value={Telefono} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Pais:</Form.Label></td>
                                <td><Form.Control type="text" value={Pais} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Ciudad:</Form.Label></td>
                                <td><Form.Control type="text" value={City} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Codigo Postal:</Form.Label></td>
                                <td><Form.Control type="number" value={CodigoPostal} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Direccion:</Form.Label></td>
                                <td><Form.Control type="text" value={Direccion} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Cantidad de Productos:</Form.Label></td>
                                <td><Form.Control type="number" value={CantidadProductos} disabled/></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Card.Body className="align-self-start">
                <ModalActualizarProveedor/>
                <Button variant="danger" className="ml-2" onClick={eliminarProveedor}>Eliminar Proveedor</Button>
            </Card.Body>
        </Card>
    </Container>
);

export default CardInformacionProveedor;
