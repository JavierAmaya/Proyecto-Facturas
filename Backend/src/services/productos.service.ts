import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Producto,IProducto,IResultado} from "../entity/productos.entity";

export class ProductoService{

    public async getAll(req: Request, res:Response){
        const productos = await getConnection().getRepository(Producto).find();
        res.status(200).json(productos);
    }

}