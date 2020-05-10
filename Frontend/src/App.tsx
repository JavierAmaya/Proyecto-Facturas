import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import "./css/main.css";
import './css/vendor/bootstrap/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';



import Course from "./views/course";
import Suppliers from "./views/suppliers";
import Login from "./views/Login";
import Principal from "./views/Inicio";

const App:React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/courses/:id" exact component ={Course} />
      <Route path="/suppliers" exact component ={Suppliers} />
      <Route path="/suppliers/:id" exact component ={Suppliers}/>
      <Route path="/Login" exact component = {Login}/>
      <Route path="/Inicio" exact component = {Principal}/>
    </Switch>
  </BrowserRouter>
)

export default App;
