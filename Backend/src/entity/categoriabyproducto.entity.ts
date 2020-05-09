import {ViewEntity,ViewColumn} from "typeorm";

@ViewEntity({schema:"pFacturas",database:"ingreso_vehiculos", name:"ViewCategoriaByProducto"})
export class ViewCategoriaByProducto{

    @ViewColumn()
    IDProducto: number;

    @ViewColumn()
    NameProducto: string;

    @ViewColumn()
    NameCategoria: string;

}