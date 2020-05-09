import {Application} from "express";
import {ProveedorService} from "../services/Proveedor.service";

export class  ProveedorController{
    Proveedor_Service:ProveedorService;
    constructor(private app: Application) {
        this.Proveedor_Service = new ProveedorService();
        this.routes();
    }

    private routes(){
        this.app.route("/Proveedor").post(this.Proveedor_Service.createOne);
        this.app.route("/Proveedores").get(this.Proveedor_Service.getAll);
        this.app.route("/Proveedor/:id")
        .get(this.Proveedor_Service.getOne)
        .put(this.Proveedor_Service.updateOne)
        .delete(this.Proveedor_Service.deleteOne);
    }
}