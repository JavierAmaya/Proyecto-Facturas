import {Entity,Column, PrimaryColumn} from "typeorm";

@Entity({schema:"pFacturas", database:"ingreso_vehiculos",name:"Proveedor"})
export class Proveedor{
    
    @PrimaryColumn()
    IDProveedor: number;
    
    @Column()    
    NombreProveedor:string;
    
    @Column()    
    NombreContacto:string;
    
    @Column()    
    EmailProveedor:string;
    
    @Column()    
    RTN:string;
    
    @Column()    
    Telefono:string;
    
    @Column()    
    Pais:string;
    
    @Column()    
    City:string;
    
    @Column()    
    CodigoPostal:number;
    
    @Column()    
    Direccion:string;
}

export interface IProveedor{
    IDProveedor: number;
    NombreProveedor:string;
    NombreContacto:string;
    EmailProveedor:string;
    RTN:string;
    Telefono:string;
    Pais:string;
    City:string;
    CodigoPostal:number;
    Direccion:string;
}

export interface IResult{
    Successed:boolean;
    MSG:string;
}
