import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../css/main.css";
interface ImoduloConta{
    numero:Number
    Cliente:string
    Factura:Number
    FechaEmitida:Date
    FechaLimite:Date
    Estado:string
    Monto:Number
    apellido:string
}

const Many_invoice : React.FC<ImoduloConta> = ({numero,Cliente,Factura,FechaEmitida,FechaLimite,Estado,Monto,apellido})=>(
    <tr>
        <td>{numero}</td>
<td><Button id="ButtonListInvoice" href="/Contabilidad/FacturasCobrar/" variant="light" size="lg">{Cliente} {apellido}</Button></td>
        <td><Button id="ButtonListInvoice" href="/Contabilidad/FacturasCobrar/" variant="light" size="lg">{Factura}</Button></td>
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