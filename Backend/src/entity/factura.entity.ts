import {Entity,Column, PrimaryColumn} from "typeorm";
import {DetalleFactura,IDetalleFactura} from "../entity/detalleFactura.entity";

@Entity({schema:"pFacturas", database:"ingreso_vehiculos",name:"Factura"})

export class Factura{

    @PrimaryColumn()
    IDFactura:number;

    @Column()
    FechaCreacion:string;

    @Column()
    FechaLimite:string;

    @Column()
    IDEmpleado:number;

    @Column()
    TipoFactura:number;

}

export interface IFactura{
    FechaCreacion:string;
    FechaLimite:string;
    IDEmpleado:number;
    TipoFactura:number;
    IDCliente?:number;
    IDProveedor?:number;
    detalleFactura:IDetalleFactura[];
}

export interface IResultado{
    successed:number;
    MSG: String;
    IDFactura:number;
}