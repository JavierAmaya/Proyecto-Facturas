import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import NavBarO from "../components/navbarO";
import ManyInvoice from "../components/manyinvoicePay";
import TabVertical from "../components/tabVertical";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import ManyInvoicePay from '../components/Card-many-invoicePay';
import {IFacturasPagar} from "../interfaces/facturasporpagar";
import {getFacturasPagar} from "../services/Facturas";
import "../css/main.css";

const ListInvoicePagar:React.FC=() =>{
    
    const [facturas, setFacturas] = useState([]);
    const [update, setUpdate] = useState(true);
    
    
    
    useEffect(()=>{
        if(update){
            getFacturasPagar().then( r =>{                
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
                                <th>Proveedor/ Encargado</th>
                                <th>Factura</th>
                                <th>Fecha Emitida</th>
                                <th>Fecha Limite</th>
                                <th>Estado</th>
                                <th>Monto</th>
                                </tr>
                            </thead>
                            <tbody>
                                {facturas.map((fac: IFacturasPagar,index)=>(
                                    
                                <ManyInvoicePay
                                Proveedor = {fac.NombreProveedor}
                                Factura = {fac.IDFactura}
                                FechaEmitida = {fac.FechaCreacion}
                                FechaLimite = {fac.FechaLimite}
                                Monto = {fac.Monto}
                                Encargado= {fac.NombreContacto}
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
export default ListInvoicePagar;