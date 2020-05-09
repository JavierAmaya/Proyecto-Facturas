import {ViewEntity,ViewColumn} from "typeorm";


@ViewEntity({schema:"pFacturas",database:"ingreso_vehiculos", name:"ViewOneSupplier_ListProduct"})
export class ViewOneSupplier_ListProduct{
    @ViewColumn()
    NameProducto: string;
    @ViewColumn()
    IDProveedor: number;
    @ViewColumn()
    Descripcion: string;
    @ViewColumn()
    Namecategoria: number;
    @ViewColumn()
    ValorVenta: number;

}