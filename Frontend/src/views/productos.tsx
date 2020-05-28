import React,{useState,useEffect} from "react";
import {} from "react-router-dom";
import {IProductos} from "../interfaces/productos";
import {getProductos} from "../services/productos"
import NavBarO from "../components/navbarO"
import Card3 from "../components/card3";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabVertical from "../components/tabVertical";
import Footer from "../components/footer"
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ModalProducto() {
    const [show, setShow] = useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Registrar Nuevo Producto
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Registrar Nuevo Producto
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group controlId="txt-nombre-producto">
                    <Form.Label>Nombre del Producto:</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" className="required"/>
                </Form.Group>
                <Form.Group controlId="txt-descripcion-producto">
                    <Form.Label>Descripcion:</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" className="required"/>
                </Form.Group>
                <Form.Group controlId="slc-proveedor-producto">
                    <Form.Label>Proveedor:</Form.Label>
                    <Form.Control as="select" custom>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="slc-categoria-producto">
                    <Form.Label>Categoria:</Form.Label>
                    <Form.Control as="select" custom>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="txt-valorcompra-producto">
                    <Form.Label>Valor de Compra:</Form.Label>
                    <Form.Control type="text" placeholder="Valor de Compra" />
                </Form.Group>
                <Form.Group controlId="txt-valorventa-producto">
                    <Form.Label>Valor de Venta:</Form.Label>
                    <Form.Control type="text" placeholder="Valor de Venta" />
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




const Productos:React.FC = () =>{

    const [productos, setProductos] = useState([]);
    const [update, setUpdate] = useState(true);

    useEffect(()=>{
        if(update){
            getProductos().then( r =>{                
                setUpdate(false);
                setProductos(r.data);
            }); 
        }      
    },[update]);
    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
    }, []);

    return(
        <div className="backgroundImg">
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
                                     {productos.map((sup: IProductos, index)=>(
                                         <Card3
                                         name = {sup.NameProducto}
                                         id = {sup.IDProducto}
                                         precio = {sup.ValorVenta}
                                         key = {sup.IDProducto}
                                         url = "producto"
                                         />
                                    
                                    ))} 
                                </Row> 
                             </Col>
                         </Row>
                         <Row className="mt-3 mb-3 ml-2">
                            <ModalProducto />
                         </Row>
                     </Container>
                </Col>
           </Row>
           <Footer/>
       </div>
    )

}  

export default Productos;