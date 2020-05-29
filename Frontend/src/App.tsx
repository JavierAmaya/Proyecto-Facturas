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
import InformacionProveedor from "./views/informacionProveedor";
import Cliente from "./views/cliente";
import Proveedor from "./views/proveedores";
import informacionCliente from "./views/informacionCliente";
import NavbarLogin from "./components/Login/Login";
import Factura from "./views/factura";
import POS from "./views/pos";
import Settings from "./views/setting";
import ModContabilidad from "./views/contabilidad";
import listado_FacturasPorCobrar from "./views/listado_FacturasPorCobrar";
import listado_FacturasPorPagar from "./views/listado_FacturasPorPagar";
import RegistrarFacturaPagar from "./views/registrarFacPagar";

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
      <Route path="/proveedor/:id" exact component = {InformacionProveedor}/>  
      <Route path="/contabilidad/facturaCobrar/registrar" exact component = {Factura}/>  
      <Route path="/pos" exact component = {POS}/>  
      <Route path="/settings" exact component = {Settings}/> 
      <Route path="/contabilidad" exact component = {ModContabilidad}/>
      <Route path="/contabilidad/facturasCobrar" exact component = {listado_FacturasPorCobrar}/>
      <Route path="/contabilidad/facturasPagar" exact component = {listado_FacturasPorPagar}/>
      <Route path="/contabilidad/facturasPagar/registrar" exact component = {RegistrarFacturaPagar}/> 

    </Switch>
  </BrowserRouter>
)

export default App;
