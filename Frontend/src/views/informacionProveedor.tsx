import React, {useState,useEffect} from 'react';
import {} from "react-router-dom";
import NavBarO from "../components/navbarO";
import CardInformacionProveedor from "../components/cardInfoProveedor";
import {getInformacionProveedor} from "../services/proveedores";
import {IProveedorInformacion} from "../interfaces/informacionproveedor";
import {useParams} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabVertical from '../components/tabVertical';
import Container from 'react-bootstrap/Container';
import Footer from '../components/footer';

const InformacionProveedor : React.FC = () => {

    const [detalleProveedor, setDetalleProveedor] = useState([]);
    const [update, setUpdate] = useState(true);

    const {id} = useParams();

    useEffect(()=>{
        if(update){
            getInformacionProveedor(id).then( r =>{                
                setUpdate(false);
                setDetalleProveedor(r.data);
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
                        {detalleProveedor.map((prov: IProveedorInformacion , index)=>(
                            <CardInformacionProveedor
                            NombreProveedor = {prov.NombreProveedor}
                            NombreContacto= {prov.NombreContacto}
                            EmailProveedor = {prov.EmailProveedor}
                            RTN = {prov.RTN}
                            Telefono = {prov.Telefono}
                            Pais = {prov.Pais}
                            City = {prov.City}
                            CodigoPostal = {prov.CodigoPostal}
                            Direccion = {prov.Direccion}
                            CantidadProductos = {prov.CantidadProductos}
                            />
                        ))}
                    </Container>
                </Col>
            </Row>
            <Footer/>
    </div>
    );
};

export default InformacionProveedor;