import {Entity,Column, PrimaryColumn} from "typeorm";

@Entity({schema:"pFacturas", database:"ingreso_vehiculos",name:"DetalleFactura"})

export class DetalleFactura{

    @PrimaryColumn()
    IDDetalleFactura:number;

    @Column()
    IDFactura:number;

    @Column()
    IDProducto:number;

    @Column()
    Cantidad:number;

}

export interface IDetalleFactura{
    IDFactura:number;
    IDProducto:number;
    Cantidad:number;
}

export interface IResultado{
    Successed:boolean;
    MSG: String;
}