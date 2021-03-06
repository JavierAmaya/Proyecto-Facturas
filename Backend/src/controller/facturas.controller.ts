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

        this.app.route("/factura")
        .post(this.factura_service.nuevaFactura);

        this.app.route("/factura/:id")
        .put(this.factura_service.updateOneFactura);

        this.app.route("/contabilidad/facturasPagar/:id")
        .get(this.factura_service.facturaPagarDetalle);

        this.app.route("/contabilidad/facturasPagarProducto/:id")
        .get(this.factura_service.facturaPagarProducto);


        this.app.route("/contabilidad/facturasPagar/:id")
        .get(this.factura_service.facturaPagarDetalle);

        this.app.route("/contabilidad/facturasPagarProducto/:id")
        .get(this.factura_service.facturaPagarProducto);

        //Delete: Por efecto de contexto de negocio
        //Una Factura no puede ser eliminada, puede cambiar de estado
        //Si esta pendiente, o hecho , si esta hecho el pago solamente
        //se archivara dicha factura , pero no podra ser eliminada



    }

}
