import React from "react";
import Table from 'react-bootstrap/Table';
import Many_Invoice from './many-invoice';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import "../css/main.css";
const ManyInvoice: React.FC = () =>(
    <div className="col-8" id="ListInvoice">
        <Form inline>
            <FormControl type="text" placeholder="Search" className="col-6" />
            <Button variant="outline-success">Search</Button>
        </Form>
        <Table  striped bordered hover>
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
                <Many_Invoice numero={1} Cliente="Marisol Carranza" Factura={125} FechaEmitida={"10/05/2019"} FechaLimite={"10/06/2019"} Estado={"Pendiente"}Monto={12589}/>
            </tbody>
        </Table>
    </div>
);

export default ManyInvoice;