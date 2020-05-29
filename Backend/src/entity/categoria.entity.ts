import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"pFacturas",database:"ingreso_vehiculos",name:"Categoria"})
export class Categoria{
    @PrimaryColumn() IDCategoria:number;
    @Column() NameCategoria: string;
    @Column() Descripcion: string;
}