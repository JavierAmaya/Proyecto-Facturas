import {Application} from "express";
import {ClienteService} from "../services/Cliente.service";

export class  ClienteController{
    Cliente_Service:ClienteService;
    constructor(private app: Application) {
        this.Cliente_Service = new ClienteService();
        this.routes();
    }

    private routes(){
        //this.app.route("/supplier/:id/summary")
        //.get(this.supplier_service.getOneSummary);

        this.app.route("/Cliente").post(this.Cliente_Service.createOne);

        this.app.route("/Clientes").get(this.Cliente_Service.getAll);

        this.app.route("/Cliente/:id")
        .get(this.Cliente_Service.getOne)
        .put(this.Cliente_Service.updateOne)
        .delete(this.Cliente_Service.deleteOne);
    }
}