import React,{useState,useEffect} from "react";

import {getProductos} from "../services/productos";
import {postFactura, putFactura} from "../services/factura"
import {IProductos} from "../interfaces/productos";
import ModalFactura from "./modalFactura"
import {useParams} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {getClientes} from '../services/clientes';
import {ICliente} from "../interfaces/clientes";
import {IFactura} from "../interfaces/infofactura"
import {IDetalleFactura} from "../interfaces/detalleFactura"


import useFormHelper from "../helpers/useFormHelpers";

const FactForm:React.FC = () => {
  const dtf: IDetalleFactura[] = [];
  const f: IFactura = {
    FechaCreacion:"",
    FechaLimite:"",
    IDEmpleado:1,
    TipoFactura:0,
    IDCliente:0,
    IDProveedor:0,
    detalleFactura: dtf
  }
  const [factura , setFactura]=useState(f);

  function handleFactura(e:any) {
    console.log(factura);
    console.log(e.target.name);
    if(e.target.name == "FechaCreacion" ){
      factura.FechaCreacion = e.target.value;
    }else if (e.target.name == "FechaLimite"){
      factura.FechaLimite = e.target.value;
    }else if (e.target.name == "IDCliente"){
      factura.IDCliente = e.target.value;
      factura.TipoFactura = 1;
    }

    setFactura(factura);
    console.log(e.target.name);
    console.log(factura);
  }
  
  const [productos,setProd] = useState([]);
  const [cleanUp,setCleanUp] = useState(true);
    
    /* MODAL */
  const [showmodal,setShowmodal] = useState(false);
  const [submitting,setSubmitting] = useState(false);
  const [message,setMessage] = useState("Quieres guardar esta factura?");
  const [completed,setCompleted] = useState(false);
    
  /*clientes*/
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

  function hideModal(){
    setShowmodal(false);
  }
  function showModal(){
    setShowmodal(true);
  }      
  function saveFactura(){
    if(!completed){
      setSubmitting(true);
      setMessage("Enviando...");
      if(id){
        console.log("entro a id")
        putFactura(id,values).then(value=>{
          setCompleted(true);
          setSubmitting(false);
          if(value.data.successed){
            setMessage("Factura Actualizada");          
          }else{
            setMessage("Esta Factura ya tiene asignado este cliente ");
          }
        })
      }else{
        console.log("entro a POSt");
        console.log(factura);
        postFactura(factura).then(value=>{
          setCompleted(true);
          setSubmitting(false);
          if(value.data.Successed){
            setMessage("Su factura no fue guardada");          
          }else{
            setMessage("Su Factura fue guardada con Exito! :)");
          }
        })
      }
    }else{
      setCompleted(false);
      setMessage("Do you want to save?");
      hideModal();
    }
    
  }

    
  const {id} = useParams();
     
  const states = useState({
    FechaCreacion:"",
    //FechaLimite:"",
    //IDEmpleado:"",
    //TipoFactura:"",
    //IDCliente:"",
    //IDProveedor:"",
    //detalleFactura:[]
   
  });     

  const {
    values,      
    handleChange     
  } = useFormHelper(states);

  useEffect(()=>{
    getProductos().then(c => {
      setProd(c.data);
    });
  },[]);

  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);
  

  return(

      
    <div>

      <ModalFactura
        title="Confirmation"
        description={message}
        lbl_main_btn="Ok"
        lbl_snd_btn="No"
        show={showmodal}
        closeModal={hideModal}
        accept={saveFactura}
        submitting={submitting}
        completed={completed}
      />

      <div>
      <Container className="padding-items align-items-center mt-4">
        <Card className="container pl-0 pr-0">
            <Card.Body className="align-self-center">
                <div>
                    <h2 className="text-center">Ferreteria La Unión</h2>
                    <h1 className="text-center">Crear Factura</h1>
                </div>
                <hr  style={{
                    color: '#ff0000',
                    backgroundColor: '#ff0000',
                    height: .4,
                    width: 1000,
                    borderColor : '#ff0000'
                }}/>
                <div>
                    <Row className="align-items-center ml-5 pl-4">
                        <Col>
                            <Form.Group controlId="slc-categoria-producto">
                              <label htmlFor="select_products">Productos</label>
                              <select 
                                className="form-control" 
                                id="select_products"
                                onChange={handleChange}
                                name="detalleFactura"
                                value={values.detalleFactura}
                              >
                                <option value="">choose an option</option>
                                {productos.map( (productos:IProductos) => (
                                  <option value={productos.IDProducto} key={productos.IDProducto} >{productos.NameProducto}</option>
                                ) )}
                              </select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Precio:</Form.Label>
                                <Form.Control type="text" placeholder="Precio" className="required"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Cantidad:</Form.Label>
                                <Form.Control type="text" placeholder="Cantidad" className="required"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="success" className="mt-2">Agregar</Button>
                        </Col>
                    </Row>
                </div>
                <hr  style={{
                    color: '#ff0000',
                    backgroundColor: '#ff0000',
                    height: .1,
                    width: 1000,
                    borderColor : '#ff0000'
                }}/>
                <div className="align-items-center ml-5 mr-5 pl-5">
                    <Row className="align-items-center ml-5 mr-5 pl-5">
                        <Col md="5">
                            <Form.Group>
                                <Form.Label><strong>Dirección:</strong> La Unión, Olancho</Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Teléfono:</strong> 9968-1203</Form.Label>
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="fechaCreacion">Fecha Creacion</label>
                              <input 
                                type="date" 
                                className="form-control" 
                                id="FechaCreacion"
                                name="FechaCreacion"
                                onChange={handleFactura}
                              />
                            </Form.Group>
                            <Form.Group>
                              <label htmlFor="Input_FechaLimite">Fecha Limite</label>
                              <input 
                                type="date" 
                                className="form-control" 
                                id="Input_FechaLimite"
                                name="FechaLimite"
                                onChange={handleFactura}

                              />
                            </Form.Group>
                        </Col>
                        <Col md="5">
                            <Form.Group>
                              <label htmlFor="Clientes">Clientes</label>
                              <select 
                                  className="form-control" 
                                  id="Clientes"
                                  onChange={handleFactura}
                                  name="IDCliente"
                              >
                                  <option value="">choose an option</option>
                                  {cliente.map((cl: ICliente, index)=>(
                                      <option value={cl.IDCliente} key={cl.IDCliente} >{cl.NombreCliente}</option>
                                  ))} 
                              </select>
                            </Form.Group>
                            <br/>
                            <br/>
                            <Form.Group>
                                <Form.Label><strong>Dirección:</strong>La Union Olancho</Form.Label>
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Label><strong>RTN:</strong>1807-1968-009362</Form.Label>
                            </Form.Group>
                        </Col>
                    </Row>
                </div>
                <hr  style={{
                    color: '#ff0000',
                    backgroundColor: '#ff0000',
                    height: .1,
                    width: 1000,
                    borderColor : '#ff0000'
                }}/>
                <div className="ml-4 mr-4 pl-4 pr-4 text-center">
                    <Table bordered size="sm">
                        <thead>
                            <tr>
                                <th>Cantidad</th>
                                <th>Descripcion</th>
                                <th>Precio Unitario</th>
                                <th>Total lps.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Lorem</td>
                                <td>lps.12312</td>
                                <td>lps.167312</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Lorem</td>
                                <td>lps.12312</td>
                                <td>lps.167312</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Lorem</td>
                                <td>lps.12312</td>
                                <td>lps.167312</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <Row>
                  <Col className="col-sm-6"></Col>
                  <Col className="col-sm-3 text-center">
                      <ul className="list-unstyled">
                        <li>Importe Excento</li>
                        <li>Importe Gravado 15%</li>
                        <li>15% ISV</li>
                        <li>Total a pagar</li>
                      </ul>
                  </Col>
                  <Col className="col-sm-2 text-center">
                      <ul className="list-unstyled">
                        <li>L.123</li>
                        <li>L.1232</li>
                        <li>L. 1231</li>
                        <li>Lps.475465</li>
                      </ul>
                  </Col>
                  <small>La Factura es beneficio de todos, "Exijala"</small>
                  
                </Row>
            </Card.Body>
            <div className="modal-footer">
               <button className="btn btn-primary" onClick={showModal} >Registrar Factura</button>
            </div>
        </Card>
        

    </Container>
      </div>

    
    </div>


  );
}

export default FactForm;

