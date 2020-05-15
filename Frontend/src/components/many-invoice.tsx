import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import "../css/main.css";
interface ImoduloConta{
    numero:Number
    Cliente:string
    Factura:Number
    FechaEmitida:string
    FechaLimite:string
    Estado:string
    Monto:Number
}
const Many_invoice : React.FC<ImoduloConta> = ({numero,Cliente,Factura,FechaEmitida,FechaLimite,Estado,Monto})=>(
    <tr>
        <td>{numero}</td>
        <td>{Cliente}</td>
        <td>{Factura}</td>
        <td>{FechaEmitida}</td>
        <td>{FechaLimite}</td>
        <td>{Estado}</td>
        <td>L. {Monto}</td>
    </tr>  
);
export default Many_invoice;