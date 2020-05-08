import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Proveedor,IProveedor,IResult} from "../entity/proveedor.entity";


export class ProveedorService{
    
    public async getAllProveedores(req:Request, res:Response){
        const proveedores = await getConnection().getRepository(Proveedor).find();
        res.status(200).json(proveedores);
    }

    public async getOneProveedor(req:Request, res:Response){
        const proveedor:Proveedor[] = await getConnection().getRepository(Proveedor).find({where:{IDProveedor:req.params.id}});
        res.status(200).json(proveedor[0]);
    }

}