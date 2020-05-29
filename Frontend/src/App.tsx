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
import Cliente from "./views/cliente";
import Proveedor from "./views/proveedores";
import informacionCliente from "./views/informacionCliente";
import informacionProveedor from "./views/informacionProveedor";
import NavbarLogin from "./components/Login/Login";
import Factura from "./views/factura";


const App:React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/courses/:id" exact component ={Course} />
      <Route path="/suppliers" exact component ={Suppliers} />
      <Route path="/suppliers/:id" exact component ={Suppliers} />
      <Route path="/productos" exact component ={Productos} />
      <Route path="/login" exact component = {NavbarLogin}/> 
      <Route path="/main" exact component = {Main}/>
      <Route path="/inventario/productos" exact component = {Productos}/>
      <Route path="/inventario/producto/:id" exact component = {DetalleInformacion}/>  
      <Route path="/clientes" exact component = {Cliente}/>  
      <Route path="/proveedores" exact component = {Proveedor}/>  
      <Route path="/cliente/:id" exact component = {informacionCliente}/>  
      <Route path="/proveedor/:id" exact component = {informacionProveedor}/>  
      <Route path="/contabilidad/facturaNueva" exact component = {Factura}/>  

    </Switch>
  </BrowserRouter>
)

export default App;
