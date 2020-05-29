import {IdetalleProducto} from "../interfaces/detalleproducto"
export interface IFactura{
    FechaCreacion?: string
    FechaLimite?: string
    IDEmpleado?: string
    TipoFactura?: number
    IDCliente? : number
    detalleProducto : IdetalleProducto
}








