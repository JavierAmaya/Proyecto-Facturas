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
import {getClientes} from '../services/clientes'
import {ICliente} from "../interfaces/clientes"



import useFormHelper from "../helpers/useFormHelpers";

const FactForm:React.FC = () => {

    const [productos,setProd] = useState([]);
    const [cleanUp,setCleanUp] = useState(true);
    
    /* MODAL */
    const [showmodal,setShowmodal] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const [message,setMessage] = useState("Do you want to save?");
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
        setMessage("Sending...");

        if(id){
          putFactura(id,values).then(value=>{
            setCompleted(true);
            setSubmitting(false);
            if(value.data.successed){
              setMessage("Language updated with success");          
            }else{
              setMessage("Language name already exist");
            }
          })
        }else{
          postFactura(values).then(value=>{
            setCompleted(true);
            setSubmitting(false);
            if(value.data.successed){
              setMessage("Language stored with success");          
            }else{
              setMessage("Language name already exist");
            }
          })
        }
      }else{
        setCompleted(false);
        setMessage("Do you want to save?");
        hideModal();
      }
      
    }

    /*********************** */

    const {id} = useParams();
     
    const states = useState({
        FechaCreacion:"",
        FechaLimite:"",
        IDEmpleado:"",
        TipoFactura:"",
        IDCliente:"",
        IDProveedor:"",
        detalleFactura:[]
    });     

    const {
      values,      
      handleChange,
      updateValues      
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
                              <label htmlFor="exampleFormControlSelect1">Productos</label>
                              <select 
                                className="form-control" 
                                id="exampleFormControlSelect1"
                                onChange={handleChange}
                                name="category"
                                value={values.category}
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
                            <Form.Group controlId="slc-categoria-producto">
                                <Form.Label> <strong>Factura #:</strong> ##############</Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Dirección:</strong> La Unión, Olancho</Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Teléfono:</strong> 9968-1203</Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Fecha de Emision:</strong> 9968-1203</Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>CAI:</strong>123HJKB1NB12</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col md="5">
                            <Form.Group>
                              <label htmlFor="exampleFormControlSelect1">Clientes</label>
                              <select 
                                  className="form-control" 
                                  id="exampleFormControlSelect1"
                                  //onChange={handleChange}
                                  name="clientes"
                                  //value={values.category}
                              >
                                  <option value="">choose an option</option>
                                  {cliente.map((cl: ICliente, index)=>(
                                      <option value={cl.IDCliente} key={cl.IDCliente} >{cl.NombreCliente}</option>
                                  ))} 
                              </select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Dirección:</strong></Form.Label>
                                <Form.Control type="text" placeholder="Direccion" className="required"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>RTN:</strong></Form.Label>
                                <Form.Control type="text" placeholder="RTN" className="required"/>
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

