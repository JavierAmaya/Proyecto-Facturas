import {ViewEntity,ViewColumn} from "typeorm";

@ViewEntity({schema:"pFacturas",database:"ingreso_vehiculos", name:"ViewFacturasPorCobrar"})
export class ViewFacturasPorCobrar{
    @ViewColumn() IDFactura:number;
    @ViewColumn() FechaCreacion: Date;
    @ViewColumn() FechaLimite: Date;
    @ViewColumn() NombreCliente: string;
    @ViewColumn() ApellidoCliente: string;
    @ViewColumn() Monto: number;
}