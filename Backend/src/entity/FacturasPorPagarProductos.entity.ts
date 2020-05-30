import { ViewEntity, ViewColumn} from "typeorm";

@ViewEntity({schema:"pFacturas",database:"ingreso_vehiculos",name:"ViewFacturasPorPagarProductos"})
export class ViewFacturasPorPagarProductos{
    @ViewColumn() IDFactura:Number;
    @ViewColumn() NameProducto:string;
    @ViewColumn() Cantidad:number;
    @ViewColumn() ValorCompra:number;
    @ViewColumn() impuesto:number;
    @ViewColumn() Monto:number;
}