import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import "./css/main.css";
import './css/vendor/bootstrap/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';


import Prueba from "./views/pruebacompanentes";
import Course from "./views/course";
import Suppliers from "./views/suppliers";
import Login from "./views/Login";
import Main from "./views/main";
import ModContabilidad from "./views/contabilidad";
import listado_FacturasPorCobrar from "./views/listado_FacturasPorCobrar";
import listado_FacturasPorPagar from "./views/listado_FacturasPorPagar";
import RegistrarFacturaCobrar from "./views/registrarFacCobrar";
import RegistrarFacturaPagars from "./views/registrarFacPagars";
import ModDellateFacturaPagar from "./views/infoFacturaPagar";

const App:React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/courses/:id" exact component ={Course} />
      <Route path="/suppliers" exact component ={Suppliers} />
      <Route path="/suppliers/:id" exact component ={Suppliers}/>
      <Route path="/login" exact component = {Login}/> 
      <Route path="/main" exact component = {Main}/> 
      <Route path="/Prueba" exact component = {Prueba}/>
      <Route path="/Contabilidad" exact component = {ModContabilidad}/>
      <Route path="/Contabilidad/facturasCobrar" exact component = {listado_FacturasPorCobrar}/>
      <Route path="/Contabilidad/facturasPagar" exact component = {listado_FacturasPorPagar}/>
      <Route path="/Contabilidad/facturasPagar/:id" exact component = {ModDellateFacturaPagar}/>
      <Route path="/contabilidad/facturasCobrar/registrar" exact component = {RegistrarFacturaCobrar}/>
      <Route path="/contabilidad/facturasPagar/registrar" exact component = {RegistrarFacturaPagars}/>
    </Switch>
  </BrowserRouter>
)

export default App;
