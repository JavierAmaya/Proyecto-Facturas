import {Application} from "express";
import {ProveedorService} from "../services/proveedor.service";

export class ProveedorController{
    proveedor_service : ProveedorService;

    constructor (private app:Application){
        this.proveedor_service = new ProveedorService();
        this.routes();        
    }

    private routes(){
        this.app.route("/proveedores")
        .get(this.proveedor_service.getAllProveedores);

        this.app.route("/proveedor/:id")
        .get(this.proveedor_service.getOneProveedor);

        this.app.route("/proveedor")
        .post(this.proveedor_service.createProveedor);

    }

}

