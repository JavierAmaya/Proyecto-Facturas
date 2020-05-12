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
        .get(this.producto_service.getOne)//ok
        .put(this.producto_service.updateOne)//ok
        .delete(this.producto_service.eliminarProducto);
        
        this.app.route("/productos").get(this.producto_service.getAll);

        this.app.route("/producto/:id/proveedor").get(this.producto_service.getProveedorProducto);//ok

        this.app.route("/producto/:id/categoria").get(this.producto_service.getCategoriaProducto);//ok

        this.app.route("/producto")//ok
        .post(this.producto_service.agregarNuevoProducto); 

        this.app.route("/proveedor/:id/listaProductos").get(this.producto_service.ListarProductosOneProveedor);//ok

    }
}
