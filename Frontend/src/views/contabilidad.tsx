import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import NavBarO from "../components/navbarO";
import InfoMenuFacturas from "../components/infocontabilidad";
import TabVertical from "../components/tabVertical";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
const ModContabilidad:React.FC=() =>{
    const [facturascobrar,setFacturascobrar] = useState(false);
    const [facturaspagar,setFacturaspagar] = useState(false);
    return(
        <div >
            <NavBarO/>
                <Row id="rowAllConta">
                    <Col className="backgroundTap" md="2">
                        <TabVertical/>
                    </Col>
                    <InfoMenuFacturas/>
                </Row>
        </div>
    )
}
export default ModContabilidad;