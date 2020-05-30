import React, {useState,useEffect} from 'react';
import {} from "react-router-dom";
import NavBarO from "../components/navbarO";
import CardInformacionCliente from "../components/cardInfoCliente";
import {getInformacionClientes} from "../services/clientes";
import {IClienteInformacion} from "../interfaces/informacioncliente";
import {useParams} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabVertical from '../components/tabVertical';
import Container from 'react-bootstrap/Container';
import Footer from '../components/footer';

const InformacionCliente : React.FC = () => {

    const [detalleCliente, setDetalleCliente] = useState([]);
    const [update, setUpdate] = useState(true);
    

    const {id} = useParams();

    useEffect(()=>{
        if(update){
            getInformacionClientes(id).then( r =>{                
                setUpdate(false);
                setDetalleCliente(r.data);
            }); 
            
        }      
    },[update]);
    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
    }, []);

     return(
        <div>
            <NavBarO/>
            <Row>
                <Col className="backgroundTap" md="2">
                        <TabVertical/> 
                </Col>
                <Col className="background">
                    <Container className="mb-4 ">
                        {detalleCliente.map((cli: IClienteInformacion , index)=>(
                            <CardInformacionCliente
                            IDCliente = {cli.IDCliente}
                            NombreCliente = {cli.NombreCliente}
                            ApellidoCliente= {cli.ApellidoCliente}
                            EmailCliente = {cli.EmailCliente}
                            RTN = {cli.RTN}
                            Telefono = {cli.Telefono}
                            Direccion1 = {cli.Direccion1}
                            Direccion2 = {cli.Direccion2}
                            cantidadFacturas = {cli.cantidadFacturas}
                            />
                        ))};
                    </Container>
                </Col>
            </Row>
            <Footer/>
       </div>
    );
};

export default InformacionCliente;