import React,{useState,useEffect} from "react";
import {} from "react-router-dom";
import {IProductos} from "../interfaces/productos";
import {IProveedor} from "../interfaces/proveedor";
import {ICategorias} from "../interfaces/categoria";
import {getProductos} from "../services/productos"
import {getProveedores} from "../services/proveedores";
import {getCategorias} from "../services/categoria";
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
import useFormHelpers from "../helpers/useFormHelpers";
import {addProducto} from "../services/productos";

function ModalProducto() {
    const [show, setShow] = useState(false);
    const [proveedores,setProveedores] = useState([]);
    const [categorias,setCategorias] = useState([]);
    
    const states = useState({
        NameProducto: "",
        Descripcion: "",
        IDProveedor: "",
        IDCategoria: "",
        ValorCompra: "",
        ValorVenta: ""
    });
  
    const{
      values,
      handleChange,
      updateValues
    } = useFormHelpers(states)
    
    function registrarCliente() {
      addProducto(values).then(value => {
          console.log(values);
          alert("Producto añadido exitosamente!");
          window.location.reload(false);
      })
    }

    useEffect(()=>{
      getProveedores().then(c => {
        setProveedores(c.data);
      });
    },[]);

    useEffect(()=>{
      getCategorias().then(c => {
        setCategorias(c.data);
      });
    },[]);
  
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
                    <input 
                        type="text"  
                        className="form-control mt-4" 
                        placeholder="Nombre" 
                        id="txt-correo" 
                        name="NameProducto"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-descripcion-producto">
                    <Form.Label>Descripcion:</Form.Label>
                    <input 
                        type="text"  
                        className="form-control mt-4" 
                        placeholder="Descripcion" 
                        id="txt-correo" 
                        name="Descripcion"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="slc-proveedor-producto">
                    <Form.Label>Proveedor:</Form.Label>
                    <select className="form-control" name="IDProveedor" defaultValue={values.correo} 
                        onChange={handleChange}>
                      {proveedores.map( (proveedores:IProveedor) => (
                        <option value={proveedores.IDProveedor} key={proveedores.IDProveedor} >{proveedores.NombreProveedor}</option>
                      ) )}
                    </select>
                </Form.Group>
                <Form.Group controlId="slc-categoria-producto">
                    <Form.Label>Categoria:</Form.Label>
                    <select className="form-control" name="IDCategoria" defaultValue={values.correo} 
                        onChange={handleChange}>
                      {categorias.map( (categorias:ICategorias) => (
                          <option value={categorias.IDCategoria} key={categorias.IDCategoria} >{categorias.NameCategoria}</option>
                        ) )}
                    </select>
                </Form.Group>
                <Form.Group controlId="txt-valorcompra-producto">
                    <Form.Label>Valor de Compra:</Form.Label>
                    <input 
                        type="number"  
                        className="form-control mt-4" 
                        placeholder="Valor de Compra" 
                        id="txt-correo" 
                        name="ValorCompra"
                        defaultValue={values.correo} 
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="txt-valorventa-producto">
                    <Form.Label>Valor de Venta:</Form.Label>
                    <input 
                        type="number"  
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
            <Button variant="primary" onClick={registrarCliente}>
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
    const [propsProducto, setpropsProducto] = useState(true);


    useEffect(()=>{
        if(update){
            getProductos().then( r =>{                
                setUpdate(false);
                setpropsProducto(true);
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
                         <Row className="mt-3 mb-3 ml-2">
                            <ModalProducto />
                         </Row>
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
                                         propsProducto = {propsProducto}
                                         descripcion={sup.Descripcion}
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
    )

}  

export default Productos;