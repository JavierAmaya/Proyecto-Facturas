import React,{useState,useEffect} from "react";
import {getProveedores} from "../services/proveedores";
import NavBarO from "../components/navbarO"
import Card3 from "../components/card3";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabVertical from "../components/tabVertical";
import Footer from "../components/footer";
import {IProveedor} from "../interfaces/proveedor"


const Proveedor:React.FC = () => {
    const [proveedor, setProveedor] = useState([]);
    const [update, setUpdate] = useState(true);

    useEffect(()=>{
        if(update){
            getProveedores().then( r =>{                
                setUpdate(false);
                setProveedor(r.data);
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
                                    {proveedor.map((sup: IProveedor, index)=>(
                                        <Card3
                                        name = {sup.NombreProveedor}
                                        rtn = {sup.RTN}
                                        direccion = {sup.Direccion}
                                        />
                                    ))}    
                                </Row> 
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Footer/>
        </div>  
    );
}

export default Proveedor;