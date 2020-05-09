import {Application} from "express";
import {ProveedorService} from "../services/proveedor.service";

export class  ProveedorController{
    
    proveedor_service:ProveedorService;
    
    constructor(private app: Application) {
        this.proveedor_service = new ProveedorService();
        this.routes();
    }

    private routes(){
        
        this.app.route("/Proveedor")
        .post(this.proveedor_service.createOneProveedor);
        
        this.app.route("/Proveedores")
        .get(this.proveedor_service.getAllProveedores);
        
        this.app.route("/Proveedor/:id")
        .get(this.proveedor_service.getOneProveedor)
        .put(this.proveedor_service.updateOneProveedor)
        .delete(this.proveedor_service.deleteOneProveedor);
    }
}