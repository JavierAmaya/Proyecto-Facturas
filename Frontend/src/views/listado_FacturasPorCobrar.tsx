import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import NavBarO from "../components/navbarO";
import ManyInvoice from "../components/manyinvoiceCollect";
import TabVertical from "../components/tabVertical";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import {IFacturasCobrar} from "../interfaces/facturasporcobrar";
import {getFacturasCobrar} from "../services/factura"
import Many_Invoice from '../components/Card-many-invoice';
import "../css/main.css";

const ListInvoiceCobrar:React.FC=() =>{
    const [facturas, setFacturas] = useState([]);
    const [update, setUpdate] = useState(true);

    useEffect(()=>{
        if(update){
            getFacturasCobrar().then( r =>{                
                setUpdate(false);
                setFacturas(r.data);
            }); 
        }      
    },[update]);
    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
    }, []);
    return(
        <div >
            <NavBarO/>
                <Row id="rowAllConta">
                    <Col className="backgroundTap" md="2">
                        <TabVertical/>
                    </Col>
                    <Col md="10" id="ListInvoice">
                        <ManyInvoice/>
                        <Table  striped bordered hover size="md" variant="light">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Cliente</th>
                                <th>Factura</th>
                                <th>Fecha Emitida</th>
                                <th>Fecha Limite</th>
                                <th>Estado</th>
                                <th>Monto</th>
                                </tr>
                            </thead>
                            <tbody>
                                {facturas.map((fac:IFacturasCobrar, index)=>(
                                    <Many_Invoice
                                        Cliente = {fac.NombreCliente}
                                        apellido = {fac.ApellidoCliente}
                                        Factura = {fac.IDFactura}
                                        FechaEmitida = {fac.FechaCreacion}
                                        FechaLimite = {fac.FechaLimite}
                                        Monto = {fac.Monto}
                                        Estado="Pendiente"
                                        numero = {fac.IDFactura}
                                    />
                                ))}
                                
                            </tbody>
                        </Table>
                    </Col>
                </Row>
        </div>
    )
}
export default ListInvoiceCobrar;