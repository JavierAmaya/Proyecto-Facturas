
import {ViewEntity,ViewColumn} from "typeorm";

@ViewEntity({schema:"pFacturas",database:"ingreso_vehiculos", name:"ViewDetalleProducto"})
export class ViewDetalleProducto{

    @ViewColumn()
    IDProducto: number;

    @ViewColumn()
    NameProducto: string;

    @ViewColumn()
    NombreProveedor: string;

    @ViewColumn()
    NameCategoria: string;
    
    @ViewColumn()
    ValorVenta: string;

}