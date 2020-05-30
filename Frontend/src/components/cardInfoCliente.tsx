import React, {useState,useEffect} from "react";
import proveedorImg from "../img/global.png";
import Card, { CardFooter } from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {IClienteInformacion} from "../interfaces/informacioncliente";
import useFormHelpers from "../helpers/useFormHelpers";
import { updateCliente } from "../services/clientes";
import {deleteCliente} from "../services/clientes";
import Modal from "react-bootstrap/Modal";

function ModalActualizarCliente() {
    const [show, setShow] = useState(false);
    const states = useState({
        EmailCliente:"",
        Telefono:"",
        Direccion1:"",
        Direccion2:""
      });
    

      const{
        values,
        handleChange,
        updateValues
      } = useFormHelpers(states)

      const id = window.location.pathname;

      const idcliente = id.split("/");

      const idoficial = idcliente[2];
      
      function editarCliente() {
        updateCliente(idoficial,values).then(value => {
            alert("Cliente actualizado exitosamente!");
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
                    <Form.Label>Correo Electronico:</Form.Label>
                    <input 
                        type="email"  
                        className="form-control mt-4" 
                        placeholder="Correo Electronico" 
                        id="txt-correo" 
                        name="EmailCliente"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-telefono-cliente">
                    <Form.Label>Telefono:</Form.Label>
                    <input 
                        type="email"  
                        className="form-control mt-4" 
                        placeholder="Teléfono" 
                        id="txt-correo" 
                        name="Telefono"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-direccion1-cliente">
                    <Form.Label>Direccion 1:</Form.Label>
                    <input 
                        type="email"  
                        className="form-control mt-4" 
                        placeholder="Direccion 1" 
                        id="txt-correo" 
                        name="Direccion1"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-direccion2-proveedor">
                    <Form.Label>Direccion 2:</Form.Label>
                    <input 
                        type="email"  
                        className="form-control mt-4" 
                        placeholder="Direccion 2" 
                        id="txt-correo" 
                        name="Direccion2"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>   
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={editarCliente}>
                Editar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  function eliminarCliente(){
    const id = window.location.pathname;

    const idcliente = id.split("/");

    const idoficial = idcliente[2];

    deleteCliente(idoficial).then(value => {
        window.location.replace("http://localhost:3000/clientes");
  });
  }

const CardInformacionCliente: React.FC<IClienteInformacion> = ({IDCliente,NombreCliente,ApellidoCliente,EmailCliente,RTN,Telefono,Direccion1,Direccion2,cantidadFacturas}) =>(
    <Container className="padding-items align-items-center mt-4">
        <Card className="container">
            <Row>
                <Col md="3" className="offset-1">
                <Card.Title> <h3 className="text-center mt-4">{NombreCliente} {ApellidoCliente}</h3></Card.Title>
                    <Card.Img variant="top" src={proveedorImg} className="img-fluid mt-5" />
                </Col>
                <Col md="6" className="offset-1">
                <Card.Title> <h3 className="text-center mt-4">Informacion del Cliente</h3></Card.Title>
                    <Table>
                        <tbody>
                            <tr>
                                <td className="pt-3"><Form.Label>Nombre del Cliente:</Form.Label></td>
                                <td><Form.Control type="text" name="NombreCliente" value={NombreCliente} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Apellido del Cliente:</Form.Label></td>
                                <td><Form.Control type="text" name="ApellidoCliente" value={ApellidoCliente} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Correo:</Form.Label></td>
                                <td><Form.Control type="email" name="EmailCliente" value={EmailCliente} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>RTN:</Form.Label></td>
                                <td><Form.Control type="text" name="RTN" value={RTN} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Telefono:</Form.Label></td>
                                <td><Form.Control type="text" name="Telefono" value={Telefono} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Direccion 1:</Form.Label></td>
                                <td><Form.Control type="text" name="Direccion1" value={Direccion1} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Direccion 2:</Form.Label></td>
                                <td><Form.Control type="text" name="Direccion2" value={Direccion2} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Cantidad de Facturas:</Form.Label></td>
                                <td><Form.Control type="number" id="txt-cantidad-facturas" name="cantidadFacturas" value={cantidadFacturas} disabled/></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Card.Body className="align-self-start">
                <ModalActualizarCliente/>
                <Button variant="danger" className="ml-2" onClick={eliminarCliente}>Eliminar Cliente</Button>
            </Card.Body>
        </Card>
    </Container>
);

export default CardInformacionCliente;
