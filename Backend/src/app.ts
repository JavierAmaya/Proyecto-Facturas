import express,{Application} from "express";

import bodyParser from "body-parser";
import cors from "cors";

import {config} from "dotenv";
import {resolve} from "path";

config({"path":resolve(__dirname,"../.env")});

import {createConnection, Connection} from "typeorm";

import {MainController} from "./controller/main.controller";
import {SupplierController} from "./controller/supplier.controller";
import {ClienteController} from "./controller/cliente.controller";
import {ProveedorController} from "./controller/proveedor.controller";

class App{
    public app: Application;
    public main_controller: MainController;
    public supplier_controller: SupplierController;
    public cliente_controler: ClienteController;
    public proveedor_controller : ProveedorController;

    constructor(){  
        this.app = express();
        this.setConfig();
        this.setDBConnection();
        this.main_controller= new MainController(this.app);
        this.supplier_controller = new SupplierController(this.app);
        this.cliente_controler = new ClienteController(this.app);
        this.proveedor_controller = new ProveedorController(this.app);
    }

    private setConfig(){
        this.app.use(bodyParser.json({limit:"50mb"}));
        this.app.use(bodyParser.urlencoded({limit:"50mb"}));
        this.app.use(cors());
    }

    private setDBConnection(){
        createConnection().then(Connection =>{
            console.log("BD connected");
        });
    }

}

export default new App().app;