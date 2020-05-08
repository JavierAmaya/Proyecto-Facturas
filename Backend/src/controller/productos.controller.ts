import {Application} from "express";
import {ProductoService} from "../services/productos.service";

export class ProductoController{
    producto_service: ProductoService;
    constructor(private app: Application){
        this.producto_service = new ProductoService();
        this.routes();
    } 

    private routes(){
        this.app.route("/productos").get(this.producto_service.getAll);
    }
}