import {IDetalleFactura} from "../interfaces/detalleFactura"
export interface IFactura{
    FechaCreacion?: string
    FechaLimite?: string
    IDEmpleado?: number
    TipoFactura?: number
    IDCliente? : number
    IDProveedor?: number
    detalleFactura : IDetalleFactura[]
    precio?:number
}








