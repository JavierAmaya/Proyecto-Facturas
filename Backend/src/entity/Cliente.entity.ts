import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"pFacturas",database:"ingreso_vehiculos",name:"Cliente"})
export class Cliente{
    @PrimaryColumn() IDCliente:number;
    @Column() NombreCliente: string;
    @Column() ApellidoCliente: string;
    @Column() RTN: string;
    @Column() EmailCliente: string;
    @Column() Telefono: string;
    @Column() Direccion1: string;
    @Column() Direccion2: string;
}
export interface ICliente{
    IDCliente:number;
    NombreCliente: string;
    ApellidoCliente: string;
    RTN: string;
    EmailCliente: string;
    Telefono: string;
    Direccion1: string;
    Direccion2: string;
}

export interface IResult{
    Successed:boolean;
    MSG: String;
}