import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Producto,IProducto,IResultado} from "../entity/productos.entity";
import {ViewProveedorByProducto} from "../entity/proveedorbyproduct.entity";

export class ProductoService{

    public async getAll(req: Request, res:Response){
        const productos = await getConnection().getRepository(Producto).find();
        res.status(200).json(productos);
    }

    public async getOne(req: Request, res:Response){
        const producto: Producto[] = await getConnection().getRepository(Producto).find({ where: {IDProducto: req.params.id} });
        res.status(200).json(producto[0]);
    }

    public async getProveedorProducto(req: Request, res:Response){
        const producto: ViewProveedorByProducto[] = await getConnection().getRepository(ViewProveedorByProducto).find({ where: {IDProducto: req.params.id} });
        res.status(200).json(producto[0]);
    }

    public async updateOne(req: Request, res:Response){
        try{

            await getConnection().createQueryBuilder().update(Producto)
            .set({
                NameProducto: req.body.NameProducto,
                Descripcion: req.body.Descripcion,
                IDProveedor: req.body.IDProveedor,
                IDCategoria: req.body.IDCategoria,
                ValorCompra: req.body.ValorCompra,
                ValorVenta: req.body.ValorVenta
            })
            .where("IDProducto = :id", {id: req.params.id})
            .execute();

            res.status(200).json({
                updated: true
            })

        }
        catch(Error){
            res.status(400).json({
                updated: false,
                Message: Error.Message
            });
        }
    }

}