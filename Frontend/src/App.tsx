import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import "./css/main.css";
import './css/vendor/bootstrap/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';



import Course from "./views/course";

import Suppliers from "./views/suppliers"
import Productos from './views/productos';
import Login from "./views/Login";
import Main from "./views/main";
import DetalleInformacion from "./views/detalle";
import informacionProveedor from "./views/informacionProveedor";
import Cliente from "./views/cliente";
import Proveedor from "./views/proveedores";
import InformacionCliente from "./views/informacionCliente";
import RegistrarFacturaCobrar from "./views/registrarFacCobrar";


const App:React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/courses/:id" exact component ={Course} />
      <Route path="/suppliers" exact component ={Suppliers} />
      <Route path="/suppliers/:id" exact component ={Suppliers} />
      <Route path="/productos" exact component ={Productos} />
      <Route path="/login" exact component = {Login}/> 
      <Route path="/main" exact component = {Main}/>
      <Route path="/inventario/productos" exact component = {Productos}/>
      <Route path="/inventario/producto/:id" exact component = {DetalleInformacion}/>  
      <Route path="/clientes" exact component = {Cliente}/>
      <Route path="/cliente/:id" exact component = {InformacionCliente}/> 
      <Route path="/proveedores" exact component = {Proveedor}/>
      <Route path="/proveedor/:id" exact component = {informacionProveedor}/>
      <Route path="/contabilidad/FacturasCobrar/Registrar" exact component = {RegistrarFacturaCobrar}/>
    </Switch>
  </BrowserRouter>
)

export default App;
