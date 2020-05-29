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
import useFormHelpers from "../helpers/useFormHelpers";
import {addCliente} from "../services/clientes";

function ModalCliente() {
    const [show, setShow] = useState(false);
    const states = useState({
        NombreCliente:"",
        ApellidoCliente:"",
        RTN:"",
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
      
      function registrarCliente() {
        addCliente(values).then(value => {
            alert("Cliente añadido exitosamente!");
            window.location.reload(false);
        })
      }
  
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
                    <input 
                        type="text"  
                        className="form-control mt-4" 
                        placeholder="Nombre" 
                        id="txt-nombre" 
                        name="NombreCliente"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-apellido-cliente">
                    <Form.Label>Apellido del Contacto:</Form.Label>
                    <input 
                        type="text"  
                        className="form-control mt-4" 
                        placeholder="Apellido" 
                        id="txt-apellido" 
                        name="ApellidoCliente"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-RTN-cliente">
                    <Form.Label>RTN:</Form.Label>
                    <input 
                        type="number"  
                        className="form-control mt-4" 
                        placeholder="RTN" 
                        id="txt-correo" 
                        name="RTN"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
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
            <Button variant="primary" onClick={registrarCliente}>
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
                        <Row className="mt-3 mb-3 ml-2">
                            <ModalCliente />
                        </Row>
                        <Row>
                            <Col>
                                <Row className="mb-3">
                                    {cliente.map((cl: ICliente, index)=>(
                                        <Card3
                                         name = {cl.NombreCliente}
                                         id = {cl.IDCliente}
                                         key = {cl.IDCliente}
                                         url = "cliente"
                                         telefono={cl.Telefono}
                                         rtn={cl.RTN}
                                        />
                                    ))}    
                                </Row> 
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Footer/>
        </div>  
    );
}

export default Cliente;