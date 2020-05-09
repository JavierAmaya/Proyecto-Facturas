import {Request,Response} from "express";
import {getConnection} from "typeorm";
import {Proveedor,IProveedor,IResult} from "../entity/Proveedor.entity";

export class ProveedorService{
    public async getAll(req:Request,res:Response){
        const proveedores = await getConnection().getRepository(Proveedor).find();
        res.status(200).json(proveedores);  
    }
    public async deleteOne(req: Request , res:Response){
        const result: IResult[] = await getConnection().query(`
        EXEC pFacturas.SP_DELETE_PROVEEDORES
        @IDProveedor = ${req.params.id} `);
        res.status(201).json(result[0]); 
    }
    public async createOne(req: Request , res:Response){
        const P : IProveedor = req.body;
        const result: IResult[] = await getConnection().query(`
        EXEC pFacturas.SP_CREATE_PROVEEDORES
        @IDProveedor = ${P.IDProveedor},
        @NombreProveedor = '${P.NombreProveedor}',
        @NombreContacto = '${P.NombreContacto}',
        @RTN = '${P.RTN}',
        @EmailProveedor = '${P.EmailProveedor}',
        @Telefono = '${P.Telefono}',
        @Pais = '${P.Pais}',
        @City = '${P.City}',
        @CodigoPostal = '${P.CodigoPostal}',
        @Direccion = '${P.Direccion}'`);

        res.status(201).json(result[0]);
    }
    public async getOne(req:Request, res:Response){
        const proveedor:Proveedor[] = await getConnection().getRepository(Proveedor).find({where:{IDProveedor:req.params.id}});
        res.status(200).json(proveedor);
        
    }
    public async updateOne(req:Request, res:Response){
        try {
            await getConnection().createQueryBuilder().update(Proveedor)
            .set({
                NombreProveedor: req.body.NombreProveedor,
                NombreContacto: req.body.NombreContacto,
                RTN: req.body.RTN,
                EmailProveedor: req.body.EmailProveedor,
                Telefono: req.body.Telefono,
                Pais: req.body.Pais,
                City: req.body.City,
                CodigoPostal: req.body.CodigoPostal,
                Direccion: req.body.Direccion
                
            })
            .where("IDProveedor = :id",{id: req.params.id}).execute();

            res.status(200).json({
                update:true
            });
            
        } catch (Error) {
            res.status(401).json({
                update:false,
                Message: Error.Message
            }); 
        }
    }
}