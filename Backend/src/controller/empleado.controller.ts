import {Application} from "express";
import  {EmpleadoService} from "../services/empleado.services";

export class EmpleadoController{
    Empleado_Service:EmpleadoService;
    constructor(private app:Application){
        this.Empleado_Service=new EmpleadoService;
        this.routes();
    }
    private routes(){
        this.app.route("/iniciarsesion").post(this.Empleado_Service.ValidarUsuario);
    }
}