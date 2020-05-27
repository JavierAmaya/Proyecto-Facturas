import React,{useState,useEffect} from "react";
import {getClientes} from "../services/clientes";
import NavBarO from "../components/navbarO"
import Card3 from "../components/card3";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabVertical from "../components/tabVertical";
import Footer from "../components/footer";
import {ICliente} from "../interfaces/clientes"
import Button from "react-bootstrap/Button";

const Cliente:React.FC = () => {
    const [cliente, setCliente] = useState([]);
    const [update, setUpdate] = useState(true);

    useEffect(()=>{
        if(update){
            getClientes().then( r =>{                
                setUpdate(false);
                setCliente(r.data);
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
                <Col className="background" md="10">
                    <Container>
                        <Row>
                            <Col>
                                <Row>
                                    {cliente.map((sup: ICliente, index)=>(
                                        <Card3
                                        name = {sup.NombreCliente}
                                        rtn = {sup.RTN}
                                        direccion = {sup.Direccion1}
                                        />
                                    ))}    
                                </Row> 
                            </Col>
                        </Row>
                        <Row className="mt-3 mb-3 ml-2">
                            <Button variant="primary">Añadir Nuevo Cliente</Button>
                         </Row>
                    </Container>
                </Col>
            </Row>
            <Footer/>
        </div>  
    );
}

export default Cliente;