import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"pFacturas",database:"ingreso_vehiculos",name:"Empleado"})
export class Empleado{
    @PrimaryColumn() IDEmpleado:number;
    @Column() NombreEmpleado: string;
    @Column() ApellidoEmpleado: string;
    @Column() EmailEmpleado: string;
    @Column() UsuarioAsignado: string;
    @Column() Password: string;
    @Column() IDTipoEmpleado: Number;
    @Column() Telefono: string;
    @Column() fechaContratacion: string;
    
}
export interface IEmpleado{
    IDEmpleado:number;
    NombreEmpleado: string;
    ApellidoEmpleado: string;
    EmailEmpleado: string;
    UsuarioAsignado: string;
    Password: string;
    IDTipoEmpleado: Number;
    Telefono: string;
    fechaContratacion: string;
}

export interface IResult{
    Successed:boolean;
    MSG: String;
}