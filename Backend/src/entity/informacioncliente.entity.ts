import {ViewEntity,ViewColumn} from "typeorm";

@ViewEntity({schema:"pFacturas",database:"ingreso_vehiculos",name:"ViewInformacionCliente"})
export class ViewInformacionCliente{

    @ViewColumn()
    IDCliente : number 
    
    @ViewColumn()    
    NombreCliente : string
    
    @ViewColumn()    
    ApellidoCliente : string 

    @ViewColumn()
    EmailCliente : string

    @ViewColumn()
    RTN : string 

    @ViewColumn()
    Telefono: string 

    @ViewColumn()
    Direccion1: string

    @ViewColumn()
    Direccion2: string
    
    @ViewColumn()
    cantidadFacturas: number
    
}