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

    public async createProveedor(req:Request , res:Response){
        const p : IProveedor = req.body;
        const result:IResult[] = await getConnection().query(`EXEC pFacturas.SP_CREATE_PROVEEDOR
        @IDProveedor = ${p.IDProveedor},
        @NombreProveedor = '${p.NombreProveedor}',
        @NombreContacto = '${p.NombreContacto}',
        @EmailProveedor = '${p.EmailProveedor}',
        @RTN = '${p.RTN}',
        @Telefono = '${p.Telefono}',
        @Pais = '${p.Pais}',
        @City = '${p.City}',
        @CodigoPostal = ${p.CodigoPostal},
        @Direccion = '${p.Direccion}'`);


        res.status(201).json(result[0]);
    }

}