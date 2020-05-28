import React,{useState,useEffect}from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "../css/main.css";
const ManyInvoice: React.FC = () =>{
    return(
        <div>
            <Form inline className="col-12" id="FormInvoiceSearch">
                <FormControl type="text" placeholder="Search" id="SearchInvoice" className="col-6 "/>
                <Button className="col-2" variant="light" id="ButtonSearch">Search</Button>
            </Form>
            <div className="mb-2">
                <Button variant="primary" size="lg" id="CrearObjecto">
                Agregar Factura
                </Button>
            </div>
            <Breadcrumb  id="BreadcrumbListInvoice" >
                <Breadcrumb.Item href="/Contabilidad">Contabilidad</Breadcrumb.Item>
                <Breadcrumb.Item active href="Contabilidad/Facturas">
                    Facturas Por Cobrar
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}
export default ManyInvoice;