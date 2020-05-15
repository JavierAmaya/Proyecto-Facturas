import React,{useState,useEffect} from "react";
import {} from "react-router-dom";
import {IDataSupplier} from "../interfaces/supplier";
import NavBarO,{} from "../components/navbarO";
import {getSuppliers} from "../services/supplier"
import Card2 from "../components/card2";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Suppliers:React.FC = () =>{

    const [suppliers, setSupplier]= useState([]);
    const [update, setUpdate]= useState(true);

    useEffect(()=>{
        if(update){
            getSuppliers().then( r =>{                
                setUpdate(false);
                setSupplier(r.data);
            });
        }      
    },[update]);
    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
    }, []);

    return (
       <div className="backgroundImg">
           <NavBarO/>
           <Container>
               <Row>
                    {suppliers.map((sup: IDataSupplier, index)=>(
                         <Card2
                         title = {sup.SupplierName}
                         rtn = {sup.Phone}
                         direccion = {sup.Address}
                        />
                    ))}  
               </Row>
           </Container>
       </div>
    )
}

export default Suppliers;