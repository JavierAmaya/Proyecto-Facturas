import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import "../css/main.css";
interface ImoduloConta{
    imagen:any
    title:String
    encabezado:String
    NFacturas:number
    MFacturas:Number
    NFactPend:number
    CFactPend:number
}
const ModuloConta : React.FC<ImoduloConta> = ({imagen,title,encabezado,NFacturas,MFacturas,NFactPend,CFactPend})=>(
    <Col className="col-6">
        <Form>
        <Button type="submit" className="btn btn-light">
                <Card className="card" id="CardContabilidad">
                <Card.Header className="card-header col-12"><h4>{title}</h4><h6>{encabezado}</h6></Card.Header>
                    <div className="card-image col-4" id="CardConta">
                        <Card.Img src={imagen} className="img-fluid img-thumbnail p-5"/>
                    </div>
                    <div className="col-8">
                    <Table responsive="sm">
                        <tbody>
                        <tr>
                            <td id="tdCardConta">{NFacturas} Numero Facturas</td>
                            <td id="tdCardConta"><span>L </span>{MFacturas}</td>
                        </tr>
                        <tr>
                            <td id="tdCardConta">{NFactPend} Pendiente</td>
                            <td id="tdCardConta">{CFactPend}</td>
                        </tr>
                        <tr>
                            <td id="tdCardConta"></td>
                        </tr>
                        </tbody>
                    </Table>
                    </div>
                </Card>
                <Card className="">
                    <Button variant="secondary">Nueva Factura</Button>
                </Card>
            </Button>
        </Form>
    </Col>
);
export default ModuloConta;