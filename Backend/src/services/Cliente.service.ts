import {Request,Response} from "express";
import {getConnection} from "typeorm";
import {Cliente,ICliente,IResult} from "../entity/Cliente.entity";

export class ClienteService{
    public async getAll(req:Request,res:Response){
        const Clientes = await getConnection().getRepository(Cliente).find();
        res.status(200).json(Clientes);  
    }
    public async deleteOne(req: Request , res:Response){
        const result: IResult[] = await getConnection().query(`
        EXEC pFacturas.SP_DELETE_CLIENTE
        @IDCliente = ${req.params.id} `);
        res.status(201).json(result[0]); 
    }
    public async createOne(req: Request , res:Response){
        const c : ICliente = req.body;
        const result: IResult[] = await getConnection().query(`
        EXEC pFacturas.SP_CREATE_CLIENTE
        @IDCliente = ${c.IDCliente},
        @NombreCliente = '${c.NombreCliente}',
        @ApellidoCliente = '${c.ApellidoCliente}',
        @RTN = '${c.RTN}',
        @EmailCliente = '${c.EmailCliente}',
        @Telefono = '${c.Telefono}',
        @Direccion1 = '${c.Direccion1}',
        @Direccion2 = '${c.Direccion2}'`);

        res.status(201).json(result[0]) 
    }
    public async getOne(req:Request, res:Response){
        const cliente:Cliente[] = await getConnection().getRepository(Cliente).find({where:{IDCliente:req.params.id}});
        res.status(200).json(cliente[0]);
    }
    public async updateOne(req:Request, res:Response){
        try {
            await getConnection().createQueryBuilder().update(Cliente)
            .set({
                NombreCliente:req.body.NombreCliente,
                ApellidoCliente:req.body.ApellidoCliente,
                RTN:req.body.RTN,
                EmailCliente:req.body.EmailCliente,
                Telefono:req.body.Telefono,
                Direccion1:req.body.Direccion1,
                Direccion2:req.body.Direccion2
            })
            .where("IDCliente = :id",{id: req.params.id}).execute();

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