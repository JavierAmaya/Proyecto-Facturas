import {Application} from "express";
import {CategoriaService} from "../services/categoria.service";

export class CategoriaController{

    categoria_service: CategoriaService;
    constructor(private app: Application){
        this.categoria_service = new CategoriaService();
        this.routes();
    } 

    private routes(){
        
        
        this.app.route("/categorias").get(this.categoria_service.getAll);

    }

}