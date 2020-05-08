import {ViewEntity,ViewColumn} from "typeorm";


@ViewEntity({schema:"pFacturas",database:"ingreso_vehiculos", name:"ViewProveedorByProducto"})
export class ViewProveedorByProducto{

    @ViewColumn()
    IDProducto: number;
    
    @ViewColumn()
    NameProducto: string;
    
    @ViewColumn()
    NombreProveedor: string;
    
    @ViewColumn()
    ValorCompra: number;

}