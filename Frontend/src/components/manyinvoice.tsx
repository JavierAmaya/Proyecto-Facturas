import React from "react";
import Table from 'react-bootstrap/Table';
import Many_Invoice from './many-invoice';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "../css/main.css";
const ManyInvoice: React.FC = () =>(
    <div className="col-9" id="ListInvoice">
        <Form inline className="col-12" id="FormInvoiceSearch">
            <FormControl type="text" placeholder="Search" id="SearchInvoice" className="col-6 "/>
            <Button className="col-2" variant="light" id="ButtonSearch">Search</Button>
        </Form>
        <Breadcrumb  id="BreadcrumbListInvoice" >
            <Breadcrumb.Item href="Contabilidad">Contabilidad</Breadcrumb.Item>
            <Breadcrumb.Item active href="Contabilidad/Facturas">
                Facturas
            </Breadcrumb.Item>
        </Breadcrumb>
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
                <Many_Invoice numero={1} Cliente="Marisol Carranza" Factura={125} FechaEmitida={"10/05/2019"} FechaLimite={"10/06/2019"} Estado={"Pendiente"}Monto={12589}/>
                <Many_Invoice numero={2} Cliente="Alonzo Rivera" Factura={127} FechaEmitida={"14/06/2019"} FechaLimite={"14/07/2019"} Estado={"Pagado"}Monto={12589}/>
            </tbody>
        </Table>
    </div>
);

export default ManyInvoice;