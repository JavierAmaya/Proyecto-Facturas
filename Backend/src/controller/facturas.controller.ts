import {Application} from "express";
import {FacturaService} from "../services/factura.service";

export class FacturaController{

    factura_service: FacturaService;

    constructor(private app:Application){
        
        this.factura_service = new FacturaService();
        this.routes();
        
    }

    private routes(){

        this.app.route("/facturas")
        .get(this.factura_service.getAllFacturas);

        this.app.route("/facturaCliente")
        .post(this.factura_service.nuevaFactura);


    }

}
