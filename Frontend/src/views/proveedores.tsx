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
import useFormHelpers from "../helpers/useFormHelpers";
import {addProveedor} from "../services/proveedores";

function ModalProveedor() {
    const [show, setShow] = useState(false);
    const states = useState({
        NombreProveedor: "",
        NombreContacto: "",
        RTN: "",
        EmailProveedor: "",
        Telefono: "",
        Pais: "",
        City: "",
        CodigoPostal: "",
        Direccion: ""
      });
    
      const{
        values,
        handleChange,
        updateValues
      } = useFormHelpers(states)
      
      function registrarCliente() {
        addProveedor(values).then(value => {
            alert("Proveedor añadido exitosamente!");
            window.location.reload(false);
        })
      }

  
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
                    <input 
                        type="text"  
                        className="form-control mt-4" 
                        placeholder="Nombre" 
                        id="txt-nombre" 
                        name="NombreProveedor"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-contacto-proveedor">
                    <Form.Label>Nombre del Contacto:</Form.Label>
                    <input 
                        type="text"  
                        className="form-control mt-4" 
                        placeholder="Nombre del Contacto" 
                        id="txt-nombre" 
                        name="NombreContacto"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-correo-proveedor">
                    <Form.Label>Correo:</Form.Label>
                    <input 
                        type="text"  
                        className="form-control mt-4" 
                        placeholder="Correo" 
                        id="txt-nombre" 
                        name="RTN"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-RTN-proveedor">
                    <Form.Label>RTN:</Form.Label>
                    <input 
                        type="text"  
                        className="form-control mt-4" 
                        placeholder="RTN" 
                        id="txt-nombre" 
                        name="EmailProveedor"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-telefono-proveedor">
                    <Form.Label>Telefono:</Form.Label>
                    <input 
                        type="text"  
                        className="form-control mt-4" 
                        placeholder="Telefono" 
                        id="txt-nombre" 
                        name="Telefono"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-pais-proveedor">
                    <Form.Label>Pais:</Form.Label>
                    <input 
                        type="text"  
                        className="form-control mt-4" 
                        placeholder="Pais" 
                        id="txt-nombre" 
                        name="Pais"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-ciudad-proveedor">
                    <Form.Label>Ciudad:</Form.Label>
                    <input 
                        type="text"  
                        className="form-control mt-4" 
                        placeholder="Ciudad" 
                        id="txt-nombre" 
                        name="City"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-codpostal-proveedor">
                    <Form.Label>Codigo Postal:</Form.Label>
                     <input 
                        type="text"  
                        className="form-control mt-4" 
                        placeholder="Codigo Postal" 
                        id="txt-nombre" 
                        name="CodigoPostal"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-direccion-proveedor">
                    <Form.Label>Direccion</Form.Label>
                    <input 
                        type="text"  
                        className="form-control mt-4" 
                        placeholder="Direccion" 
                        id="txt-nombre" 
                        name="Direccion"
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
                        
                        <Row className="mt-3 mb-3 ml-2">
                            <ModalProveedor />
                         </Row>
                         
                        <Row>
                            <Col>
                                <Row>
                                    {proveedor.map((pro: IProveedor, index)=>(
                                        <Card3
                                            name = {pro.NombreProveedor}
                                            nombreContacto = {pro.NombreContacto}
                                            pais = {pro.Pais}
                                            telefono={pro.Telefono}
                                            url="proveedor"
                                            id={pro.IDProveedor}
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

export default Proveedor;