import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import "../css/main.css";
interface ImoduloConta{
    numero:Number
    Proveedor:string
    Factura:Number
    FechaEmitida:string
    FechaLimite:string
    Estado:string
    Monto:Number
    Encargado:string
}
const Many_invoice : React.FC<ImoduloConta> = ({numero,Proveedor,Factura,FechaEmitida,FechaLimite,Estado,Monto,Encargado})=>(
    <tr>
        <td>{numero}</td>
        <td><Link to={`/Contabilidad/FacturasPagar/${Factura}`}><Button id="ButtonListInvoice" href="/Contabilidad/FacturasPagar/:id" variant="light" size="lg">{Proveedor} / {Encargado}</Button></Link></td>
        <td><Link to={`/Contabilidad/FacturasPagar/${Factura}`}><Button id="ButtonListInvoice" href="/Contabilidad/FacturasPagar/:id" variant="light" size="lg">{Factura}</Button></Link></td>
        <td>{FechaEmitida}</td>
        <td>{FechaLimite}</td>
        <td>
            <Form>
                <Form.Check type="switch"  id={Estado} label={Estado}/>
            </Form>
        </td>
        <td>L. {Monto}</td>
    </tr>  
);
export default Many_invoice;