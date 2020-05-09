import {Application} from "express";
import {ProveedorService} from "../services/proveedor.service";

export class  ProveedorController{
    
    proveedor_pervice:ProveedorService;
   
    constructor(private app: Application) {
        this.proveedor_pervice = new ProveedorService();
        this.routes();
    }

    private routes(){
        
        this.app.route("/Proveedor").
        post(this.proveedor_pervice.createOneProveedor);
        
        this.app.route("/Proveedores")
        .get(this.proveedor_pervice.getAllProveedores);
        
        this.app.route("/Proveedor/:id")
        .get(this.proveedor_pervice.getOneProveedor)
        .put(this.proveedor_pervice.updateOneProveedor)
        .delete(this.proveedor_pervice.deleteOneProveedor);
    }
}