import {Request,Response} from "express";
import {getConnection} from "typeorm";
import {Categoria} from "../entity/categoria.entity";

export class CategoriaService{
    public async getAll(req:Request,res:Response){

        const Categorias = await getConnection().getRepository(Categoria).find();
        res.status(200).json(Categorias);  
    }
}