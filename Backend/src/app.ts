import express,{Application} from "express";

import bodyParser from "body-parser";
import cors from "cors";

import {config} from "dotenv";
import {resolve} from "path";

config({"path":resolve(__dirname,"../.env")});

import {createConnection, Connection} from "typeorm";

import {MainController} from "./controller/main.controller";
import {SupplierController} from "./controller/supplier.controller";
import {ClienteController} from "./controller/Cliente.controller";
import {ProveedorController} from "./controller/proveedor.controller";
import {ProductoController} from "./controller/productos.controller";
import {FacturaController} from "./controller/facturas.controller";
import {LoginController} from "./controller/login.controller";
import {CategoriaController} from "./controller/categoria.controller";


class App{
    public app: Application;
    public main_controller: MainController;
    public supplier_controller: SupplierController;
    public producto_controller:ProductoController;
    public cliente_controller: ClienteController;
    public proveedor_controller :ProveedorController;
    public factura_controller: FacturaController;
    public login_controller : LoginController;
    public categoria_controller : CategoriaController;

    constructor(){  
        this.app = express();
        this.setConfig();
        this.setDBConnection();
        this.main_controller= new MainController(this.app);
        this.supplier_controller = new SupplierController(this.app);
        this.producto_controller = new ProductoController(this.app);
        this.cliente_controller = new ClienteController(this.app);
        this.proveedor_controller = new ProveedorController(this.app);
        this.factura_controller = new FacturaController(this.app);
        this.login_controller =  new LoginController(this.app);
        this.categoria_controller = new CategoriaController(this.app);
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