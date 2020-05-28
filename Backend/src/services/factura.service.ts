import {Request, Response} from "express";
import {getConnection, getConnectionOptions} from "typeorm";
import {Factura, IFactura, IResultado} from "../entity/factura.entity";
import { IResult } from "../entity/supplier.entity";
import {ViewFacturasPorCobrar} from "../entity/listInvoiceCollect";
import {ViewFacturasPorPagar} from "../entity/listInvoicePay";

export class FacturaService{

    public async getAllFacturas(req: Request, res:Response){
        const facturas = await getConnection().getRepository(Factura).find();
        res.status(200).json(facturas);
    }

    public async getOneFactura( req:Request, res:Response){
        const factura: Factura[] = await getConnection().getRepository(Factura).find();
        res.status(200).json(factura[0]); 
    }
    public async getFacturasPorCobrar( req:Request, res:Response){
        const factura: ViewFacturasPorCobrar[] = await getConnection().getRepository(ViewFacturasPorCobrar).find();
        res.status(200).json(factura); 
    }
    public async getFacturasPorPagar( req:Request, res:Response){
        const factura: ViewFacturasPorPagar[] = await getConnection().getRepository(ViewFacturasPorPagar).find();
        res.status(200).json(factura); 
    }
    public async updateOneFactura(req:Request, res:Response){
        try{

            await getConnection().createQueryBuilder().update(Factura)
            .set({
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

        if (req.body.TipoFactura===2) {
            console.log("Entro al primer if")
            let r : IResult[] = await getConnection().query(`
                EXEC pFacturas.SP_DELETE_FACTURACLIENTE
                @IDFactura = ${req.params.id}
            `);  
        }else if (req.body.TipoFactura===1) {
            console.log("entro al segundo if");
            console.log(req.body.IDCliente);
            let r : IResult[] = await getConnection().query(`
                EXEC pFacturas.SP_CREATE_FACTURA_CLIENTE
                @IDFactura = ${req.params.id},
                @IDCliente = ${req.body.IDCliente}
            `); 
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

}