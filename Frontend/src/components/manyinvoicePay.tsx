import React from "react";
import "../css/main.css";
import {} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
const ManyInvoicePay: React.FC = () =>{
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
                Facturas Por Pagar
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
    );
}
export default ManyInvoicePay;
/*<Many_Invoice numero={1} Cliente="Marisol Carranza" Factura={125} FechaEmitida={"10/05/2019"} FechaLimite={"10/06/2019"} Estado={"Pendiente"}Monto={12589}/>
                <Many_Invoice numero={2} Cliente="Alonzo Rivera" Factura={127} FechaEmitida={"14/06/2019"} FechaLimite={"14/07/2019"} Estado={"Pagado"}Monto={12589}/>*/