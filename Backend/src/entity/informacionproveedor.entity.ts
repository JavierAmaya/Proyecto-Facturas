import {ViewEntity,ViewColumn} from "typeorm";

@ViewEntity({schema:"pFacturas",database:"ingreso_vehiculos",name:"ViewInformacionProveedor"})
export class ViewInformacionProveedor{

    @ViewColumn()
    IDProveedor : number 
    
    @ViewColumn()    
    NombreProveedor : string
    
    @ViewColumn()    
    NombreContacto : string 

    @ViewColumn()
    EmailProveedor : string

    @ViewColumn()
    RTN : string 

    @ViewColumn()
    Telefono: string 

    @ViewColumn()
    Pais: string

    @ViewColumn()
    City: string
    
    @ViewColumn()
    CodigoPostal : number

    @ViewColumn()
    Direccion : string 

    @ViewColumn()
    CantidadProductos : number
    
}