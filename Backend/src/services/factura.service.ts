import {Request, Response} from "express";
import {getConnection, getConnectionOptions} from "typeorm";
import {Factura, IFactura, IResultado} from "../entity/factura.entity";
import { IResult } from "../entity/supplier.entity";
import {DetalleFactura,IDetalleFactura} from "../entity/detalleFactura.entity"

export class FacturaService{

    public async getAllFacturas(req: Request, res:Response){
        const facturas = await getConnection().getRepository(Factura).find();
        res.status(200).json(facturas);
    }

    public async getOneFactura( req:Request, res:Response){
        const factura: Factura[] = await getConnection().getRepository(Factura).find();
        res.status(200).json(factura[0]); 
    }

    public async updateOneFactura(req:Request, res:Response){
        try{

            await getConnection().createQueryBuilder().update(Factura)
            .set({

                IDFactura : req.body.IDFactura,
                FechaCreacion : req.body.FechaCreacion,
                FechaLimite : req.body.FechaLimite,
                IDEmpleado : req.body.IDEmpleado,
                TipoFactura : req.body.TipoFactura
            })
            .where("IDFactura = :id", {id: req.params.id})
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

    public async nuevaFactura(req:Request, res:Response){
        const f:IFactura = req.body;
        
        const result : IResultado[] = await getConnection().query(`
            EXEC pFacturas.SP_CREATE_FACTURA
            @FechaCreacion = '${f.FechaCreacion}',
            @FechaLimite = '${f.FechaLimite}',
            @IDEmpleado = ${f.IDEmpleado},
            @TipoFactura =${f.TipoFactura},
            @IDCliente=${f.IDCliente}
        `);
        if (result[0].successed===1) {
            console.log("entro al if");
            for (const detalle in f.detalleFactura) {
                
                let r : IResultado[] = await getConnection().query(`
                    EXEC pFacturas.SP_CREATE_DETALLEFACTURA
                    @IDFactura = ${result[0].IDFactura},
                    @IDProducto = ${f.detalleFactura[detalle].IDProducto},
                    @Cantidad = ${f.detalleFactura[detalle].Cantidad}
                `);
                console.log("registro numero : "+detalle+" insertado")
            }
        }

        res.status(201).json(result);
        
        
    }

    public async eliminarFactura(req:Request, res:Response){
        const result: IResultado [] = await getConnection().query(`EXEC pFacturas.SP_DELETE_FACTURA
        @IDFactura = ${req.params.id}`);
        res.status(201).json(result[0]);
        
    }
}