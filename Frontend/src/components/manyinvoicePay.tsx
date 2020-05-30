import React from "react";
import "../css/main.css";
import {} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Link} from "react-router-dom";
const ManyInvoicePay: React.FC = () =>{
    return(
    <div>
        <Form inline className="col-12" id="FormInvoiceSearch">
            <FormControl type="text" placeholder="Search" id="SearchInvoice" className="col-6 "/>
            <Button className="col-2" variant="light" id="ButtonSearch">Search</Button>
        </Form>
        <div className="mb-2">
        <Link to="/contabilidad/FacturasPagar/Registrar">
            <Button variant="primary" size="lg" id="CrearObjecto">
            Agregar Factura
            </Button>
        </Link>
            
        </div>
        <Breadcrumb  id="BreadcrumbListInvoice" >
            <Breadcrumb.Item href="/Contabilidad">Contabilidad</Breadcrumb.Item>
            <Breadcrumb.Item active href="Contabilidad/Facturas">
                Facturas Por Pagar
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
    );
}
export default ManyInvoicePay;