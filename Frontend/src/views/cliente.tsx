import React,{useState,useEffect} from "react";
import {getClientes} from "../services/clientes";
import NavBarO from "../components/navbarO"
import Card3 from "../components/card3";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabVertical from "../components/tabVertical";
import Footer from "../components/footer";
import {ICliente} from "../interfaces/clientes"
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ModalCliente() {
    const [show, setShow] = useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Registrar Nuevo Cliente
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Registrar Nuevo Cliente
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group controlId="txt-nombre-cliente">
                    <Form.Label>Nombre del Cliente:</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" className="required"/>
                </Form.Group>
                <Form.Group controlId="txt-apellido-cliente">
                    <Form.Label>Apellido del Contacto:</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" className="required"/>
                </Form.Group>
                <Form.Group controlId="txt-RTN-cliente">
                    <Form.Label>RTN:</Form.Label>
                    <Form.Control type="text" placeholder="RTN" />
                </Form.Group>
                <Form.Group controlId="txt-correo-cliente">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control type="email" placeholder="Correo" className="required"/>
                </Form.Group>
                <Form.Group controlId="txt-telefono-cliente">
                    <Form.Label>Telefono:</Form.Label>
                    <Form.Control type="text" placeholder="Telefono" />
                </Form.Group>
                <Form.Group controlId="txt-direccion1-cliente">
                    <Form.Label>Direccion 1:</Form.Label>
                    <Form.Control type="text" placeholder="Direccion 1" />
                </Form.Group>
                <Form.Group controlId="txt-direccion2-proveedor">
                    <Form.Label>Direccion 2:</Form.Label>
                    <Form.Control type="text" placeholder="Direccion 2" />
                </Form.Group>   
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => alert("Este boton funciona")}>
                Registrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }




const Cliente:React.FC = () => {
    const [cliente, setCliente] = useState([]);
    const [update, setUpdate] = useState(true);

    useEffect(()=>{
        if(update){
            getClientes().then( r =>{                
                setUpdate(false);
                setCliente(r.data);
            }); 
        }      
    },[update]);
    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
    }, []);

    return(
        <div>
            <NavBarO/>
            <Row>
                <Col className="backgroundTap" md="2">
                    <TabVertical/> 
                </Col>
                <Col className="background" md="10">
                    <Container>
                        <Row>
                            <Col>
                                <Row>
                                    {cliente.map((sup: ICliente, index)=>(
                                        <Card3
                                        name = {sup.NombreCliente}
                                        rtn = {sup.RTN}
                                        direccion = {sup.Direccion1}
                                        />
                                    ))}    
                                </Row> 
                            </Col>
                        </Row>
                        <Row className="mt-3 mb-3 ml-2">
                        <ModalCliente />
                         </Row>
                    </Container>
                </Col>
            </Row>
            <Footer/>
        </div>  
    );
}

export default Cliente;