import {ViewEntity,ViewColumn} from "typeorm";

@ViewEntity({schema:"pFacturas",database:"ingreso_vehiculos", name:"ViewFacturasPorPagar"})
export class ViewFacturasPorPagar{
    @ViewColumn() IDFactura:number;
    @ViewColumn() FechaCreacion: Date;
    @ViewColumn() FechaLimite: Date;
    @ViewColumn() NombreProveedor: string;
    @ViewColumn() NombreContacto: string;
    @ViewColumn() Monto: number;
}