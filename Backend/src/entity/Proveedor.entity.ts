import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"pFacturas",database:"ingreso_vehiculos",name:"Proveedor"})
export class Proveedor{
    @PrimaryColumn() IDProveedor:number;
    @Column() NombreProveedor: string;
    @Column() NombreContacto: string;
    @Column() RTN: string;
    @Column() EmailProveedor: string;
    @Column() Telefono: string;
    @Column() Pais: string;
    @Column() City: string;
    @Column() CodigoPostal: string;
    @Column() Direccion: string;
}
export interface IProveedor{
    IDProveedor:number;
    NombreProveedor: string;
    NombreContacto: string;
    RTN: string;
    EmailProveedor: string;
    Telefono: string;
    Pais: string;
    City: string;
    CodigoPostal: string;
    Direccion: string;
}

export interface IResult{
    Successed:boolean;
    MSG: String;
}