import { ViewEntity, ViewColumn} from "typeorm";

@ViewEntity({schema:"pFacturas",database:"ingreso_vehiculos",name:"ViewFacturasPorPagarDetalle"})
export class ViewFacturasPorPagarDetalle{
    @ViewColumn() IDFactura:Number;
    @ViewColumn() NombreProveedor:string;
    @ViewColumn() NombreContacto:string;
    @ViewColumn() EmailProveedor:string;
    @ViewColumn() City:string;
    @ViewColumn() CodigoPostal:number;
    @ViewColumn() Pais:string;
    @ViewColumn() Telefono:string;
    @ViewColumn() RTN:string;
    @ViewColumn() Direccion:string;
    @ViewColumn() FechaCreacion:string;
    @ViewColumn() FechaLimite:string;
}