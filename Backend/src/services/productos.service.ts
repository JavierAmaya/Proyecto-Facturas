import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Producto,IProducto,IResultado} from "../entity/productos.entity";
import {ViewProveedorByProducto} from "../entity/proveedorbyproduct.entity";
import {ViewCategoriaByProducto} from "../entity/categoriabyproducto.entity";
import {ViewOneSupplier_ListProduct} from "../entity/OneSupplier_ListProduct.entity";
import {ViewDetalleProducto} from "../entity/detalleproducto.entity"

export class ProductoService{

    public async getAll(req: Request, res:Response){
        const productos = await getConnection().getRepository(Producto).find();
        res.status(200).json(productos);
    }

    public async getOne(req: Request, res:Response){
        const producto: Producto[] = await getConnection().getRepository(Producto).find({ where: {IDProducto: req.params.id} });
        res.status(200).json(producto[0]);
    }

    public async getProveedorProducto(req: Request, res:Response){
        const producto: ViewProveedorByProducto[] = await getConnection().getRepository(ViewProveedorByProducto).find({ where: {IDProducto: req.params.id} });
        res.status(200).json(producto[0]);
    }

    public async getCategoriaProducto(req: Request, res:Response){
        const producto: ViewCategoriaByProducto[] = await getConnection().getRepository(ViewCategoriaByProducto).find({ where: {IDProducto: req.params.id} });
        res.status(200).json(producto[0]);
    }

    public async updateOne(req: Request, res:Response){
        try{

            await getConnection().createQueryBuilder().update(Producto)
            .set({
                NameProducto: req.body.NameProducto,
                IDCategoria: req.body.IDCategoria,
                ValorVenta: req.body.ValorVenta
            })
            .where("IDProducto = :id", {id: req.params.id})
            .execute();

            res.status(200).json({
                updated: true
            })

        }
        catch(Error){
            res.status(400).json({
                updated: false,
                Message: Error.Message
            });
        }
    }

    public async agregarNuevoProducto(req:Request, res: Response){
        const s: IProducto = req.body;
        const result: IResultado[] = await getConnection().query(`EXEC pFacturas.SP_CREATE_PRODUCTO
        @NameProducto ='${s.NameProducto}',
        @Descripcion ='${s.Descripcion}',
        @IDProveedor = ${s.IDProveedor},
        @IDCategoria = ${s.IDCategoria},
        @ValorCompra = ${s.ValorCompra},
        @ValorVenta = ${s.ValorVenta}`);
        res.status(201).json(result[0]);
    }

    public async eliminarProducto(req:Request, res: Response){
        const result: IResultado[] = await getConnection().query(`EXEC pFacturas.SP_DELETE_PRODUCT
        @IDProducto = ${req.params.id}`);
        res.status(201).json(result[0]);
        console.log(result[0]);
    }

    //Lacho

    public async ListarProductosOneProveedor(req:Request, res: Response){
        const provedor: ViewOneSupplier_ListProduct[] = await getConnection()
        .getRepository(ViewOneSupplier_ListProduct).find({where: {IDProveedor: req.params.id}});
        res.status(201).json(provedor);
    }
 
    public async detalleProducto( req: Request , res:Response){
        const detalleProducto : ViewDetalleProducto [] = await getConnection()
        .getRepository(ViewDetalleProducto).find({where: {IDProducto: req.params.id}})
        console.log(req.params.id);
        console.log(detalleProducto);
        res.status(201).json(detalleProducto); 
    }



}