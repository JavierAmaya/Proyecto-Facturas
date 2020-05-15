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
    </Switch>
  </BrowserRouter>
)

export default App;
