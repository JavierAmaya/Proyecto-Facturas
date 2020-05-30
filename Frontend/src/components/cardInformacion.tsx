import React, { useState , useEffect} from "react";
import proveedorImg from "../img/global.png";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {IdetalleProducto} from "../interfaces/detalleproducto";
import Modal from "react-bootstrap/Modal";
import useFormHelpers from "../helpers/useFormHelpers";
import {updateProducto, deleteProducto} from "../services/productos";
import {ICategorias} from "../interfaces/categoria";
import {getCategorias} from "../services/categoria";

function ModalActualizarProducto() {
    const [show, setShow] = useState(false);
    const [categorias,setCategorias] = useState([]);

    const states = useState({
        NameProducto:"",
        IDCategoria:"",
        ValorVenta:""
      });
    

      const{
        values,
        handleChange,
        updateValues
      } = useFormHelpers(states)

      const id = window.location.pathname;

      const idproducto = id.split("/");

      const idoficial = idproducto[3];
      
      function editarProducto() {
        updateProducto(idoficial,values).then(value => {
            alert("Proveedor actualizado exitosamente!");
            window.location.reload(false);
        })
      }

      useEffect(()=>{
        getCategorias().then(c => {
          setCategorias(c.data);
        });
      },[]);
  
    return (
      <>
        <Button variant="warning" onClick={() => setShow(true)}>
          Editar Producto
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
                    <Form.Label>Nombre del Producto:</Form.Label>
                    <input 
                        type="email"  
                        className="form-control mt-4" 
                        placeholder="Nombre del Contacto" 
                        id="txt-correo" 
                        name="NameProducto"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="slc-categoria-producto">
                    <Form.Label>Categoria:</Form.Label>
                    <select className="form-control" name="IDCategoria" defaultValue={values.correo} 
                        onChange={handleChange}>
                            <option value="">Selecciona una categoria</option>
                      {categorias.map( (categorias:ICategorias) => (
                          <option value={categorias.IDCategoria} key={categorias.IDCategoria} >{categorias.NameCategoria}</option>
                        ) )}
                    </select>
                </Form.Group>
                <Form.Group controlId="txt-direccion1-cliente">
                    <Form.Label>Valor de Venta:</Form.Label>
                    <input 
                        type="email"  
                        className="form-control mt-4" 
                        placeholder="Valor de Venta" 
                        id="txt-correo" 
                        name="ValorVenta"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={editarProducto}>
                Editar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  function eliminarProducto(){
    const id = window.location.pathname;

    const idcliente = id.split("/");

    const idoficial = idcliente[3];

    deleteProducto(idoficial).then(value => {
        window.location.replace("http://localhost:3000/inventario/productos");
  });
  }

const CardInformacion: React.FC<IdetalleProducto> = ({NameProducto,NombreProveedor,NameCategoria,ValorVenta}) => (
    
    
    <Container className="padding-items align-items-center mt-4">
        <Card className="container">
            <Row>
                <Col md="3" className="offset-1">
                <Card.Title> <h3 className="text-center mt-4">{NameProducto}</h3></Card.Title>
                    <Card.Img variant="top" src={proveedorImg} className="img-fluid mt-5" />
                </Col>
                <Col md="6" className="offset-1">
                <Card.Title> <h3 className="text-center mt-4">Informacion del Producto</h3></Card.Title>
                    <Table>
                        <tbody>
                            <tr>
                                <td className="pt-3"><Form.Label>Nombre del Producto:</Form.Label></td>
                                <td><Form.Control type="text" value={NameProducto} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Proveedor:</Form.Label></td>
                                <td><Form.Control type="text" value={NombreProveedor} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>Categoria:</Form.Label></td>
                                <td><Form.Control type="text" value={NameCategoria} disabled/></td>
                            </tr>
                            <tr>
                                <td className="pt-3"><Form.Label>ValorVenta:</Form.Label></td>
                                <td><Form.Control type="text" value={`${ValorVenta}`} disabled/></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Card.Body className="align-self-start mt-5">
                <ModalActualizarProducto/>
                <Button variant="danger" className="ml-2" onClick={eliminarProducto}>Eliminar Producto</Button>
            </Card.Body>
        </Card>
        
    </Container>
);

export default CardInformacion;