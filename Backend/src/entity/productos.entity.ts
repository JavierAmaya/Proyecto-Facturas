import {Entity,Column, PrimaryColumn} from "typeorm";

@Entity({schema:"pFacturas", database:"ingreso_vehiculos",name:"Producto"})

export class Producto{

    @PrimaryColumn()
    IDProducto:number;

    @Column()
    NameProducto:string;

    @Column()
    Descripcion:string;

    @Column()
    IDProveedor:number;

    @Column()
    IDCategoria:number;

    @Column()
    ValorCompra:number;

    @Column()
    ValorVenta:number;

}

export interface IProducto{
    NameProducto:string;
    Descripcion:string;
    IDProveedor:number;
    IDCategoria:number;
    ValorCompra:number;
    ValorVenta:number;
}

export interface IResultado{
    Successed:boolean;
    MSG: String;
}