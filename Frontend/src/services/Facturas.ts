import axios from 'axios';
import { resolve } from 'dns';

const query:string = "http://localhost:3001";

export function getFacturasCobrar(){
    return axios.get(`${query}/Contabilidad/FacturasCobrar`);
}
export function getFacturasPagar(){
    return axios.get(`${query}/Contabilidad/FacturasPagar`);
}
export function getinfoFacturasPagar(id:string): Promise<any>{
    return new Promise<any>(resolve=>{
    axios.get(`${query}/contabilidad/facturasPagar/${id}`)
    .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}
export function getinfoFacturasProducto(id:string): Promise<any>{
    return new Promise<any>(resolve=>{
    axios.get(`${query}/contabilidad/facturasPagarProducto/${id}`)
    .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}