import {Application} from "express";
import {ProductoService} from "../services/productos.service";

export class ProductoController{
    producto_service: ProductoService;
    constructor(private app: Application){
        this.producto_service = new ProductoService();
        this.routes();
    } 

    private routes(){
        
        this.app.route("/producto/:id")
        .get(this.producto_service.getOne)
        .put(this.producto_service.updateOne)
        .delete(this.producto_service.eliminarProducto);
        
        this.app.route("/productos").get(this.producto_service.getAll);

        this.app.route("/producto/:id/proveedor").get(this.producto_service.getProveedorProducto);

        this.app.route("/producto")
        .post(this.producto_service.agregarNuevoProducto); 

    }
}