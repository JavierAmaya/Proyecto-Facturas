import {Application} from "express";
import {ClienteService} from "../services/Cliente.service";

export class  ClienteController{
    
    cliente_service:ClienteService;
    
    constructor(private app: Application) {
        this.cliente_service = new ClienteService();
        this.routes();
    }

    private routes(){

        this.app.route("/cliente").post(this.cliente_service.createOne);

        this.app.route("/clientes").get(this.cliente_service.getAll);

        this.app.route("/cliente/:id")
        .get(this.cliente_service.getOne)
        .put(this.cliente_service.updateOne)
        .delete(this.cliente_service.deleteOne);
    }
}