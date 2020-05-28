import React,{useState,useEffect} from "react";
import {getProveedores} from "../services/proveedores";
import NavBarO from "../components/navbarO"
import Card3 from "../components/card3";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabVertical from "../components/tabVertical";
import Footer from "../components/footer";
import {IProveedor} from "../interfaces/proveedor"
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ModalProveedor() {
    const [show, setShow] = useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Registrar Nuevo Proveedor
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Registrar Nuevo Proveedor
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group controlId="txt-nombre-proveedor">
                    <Form.Label>Nombre del Proveedor:</Form.Label>
                    <Form.Control type="text" placeholder="Nombre del Proveedor" className="required"/>
                </Form.Group>
                <Form.Group controlId="txt-contacto-proveedor">
                    <Form.Label>Nombre del Contacto:</Form.Label>
                    <Form.Control type="text" placeholder="Nombre del Contacto" className="required"/>
                </Form.Group>
                <Form.Group controlId="txt-correo-proveedor">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control type="email" placeholder="Correo" className="required"/>
                </Form.Group>
                <Form.Group controlId="txt-RTN-proveedor">
                    <Form.Label>RTN:</Form.Label>
                    <Form.Control type="text" placeholder="RTN" />
                </Form.Group>
                <Form.Group controlId="txt-telefono-proveedor">
                    <Form.Label>Telefono:</Form.Label>
                    <Form.Control type="text" placeholder="Telefono" />
                </Form.Group>
                <Form.Group controlId="txt-pais-proveedor">
                    <Form.Label>Pais:</Form.Label>
                    <Form.Control type="text" placeholder="Pais" />
                </Form.Group>
                <Form.Group controlId="txt-ciudad-proveedor">
                    <Form.Label>Ciudad:</Form.Label>
                    <Form.Control type="text" placeholder="Ciudad" />
                </Form.Group>
                <Form.Group controlId="txt-codpostal-proveedor">
                    <Form.Label>Codigo Postal:</Form.Label>
                    <Form.Control type="text" placeholder="Codigo Postal" />
                </Form.Group>
                <Form.Group controlId="txt-direccion-proveedor">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type="text" placeholder="Direccion" />
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

  



const Proveedor:React.FC = () => {
    const [proveedor, setProveedor] = useState([]);
    const [update, setUpdate] = useState(true);

    useEffect(()=>{
        if(update){
            getProveedores().then( r =>{                
                setUpdate(false);
                setProveedor(r.data);
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
                                    {proveedor.map((sup: IProveedor, index)=>(
                                        <Card3
                                        name = {sup.NombreProveedor}
                                        rtn = {sup.RTN}
                                        direccion = {sup.Direccion}
                                        />
                                    ))}    
                                </Row> 
                            </Col>
                        </Row>
                        <Row className="mt-3 mb-3 ml-2">
                            <ModalProveedor />
                         </Row>
                    </Container>
                </Col>
            </Row>
            <Footer/>
        </div>  
    );
}

export default Proveedor;

