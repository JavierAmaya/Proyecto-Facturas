import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import "../css/main.css";
interface IdetallefacPagar{
    NameProducto:string;
    Cantidad:number;
    ValorCompra:number;
    impuesto:number;
    Monto: number;
}

const ProductoFacPagar : React.FC<IdetallefacPagar> = ({NameProducto,Cantidad,ValorCompra,impuesto,Monto})=>(
    <tr>
        <td>1</td>
        <td>{NameProducto}</td>
        <td>{Cantidad}</td>
        <td>{ValorCompra}</td>
        <td>{impuesto}</td>
        <td>{Monto}</td>
    </tr>
);
export default ProductoFacPagar;