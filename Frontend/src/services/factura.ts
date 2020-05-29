import axios from 'axios';

const query:string = "http://localhost:3001";

export function getProductos(){
    return axios.get(`${query}/productos`);
}

export function postFactura(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/factura`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function putFactura(id:string,data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.put(`${query}/factura/${id}`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getFacturasCobrar(){
    return axios.get(`${query}/Contabilidad/FacturasCobrar`);
}
export function getFacturasPagar(){
    return axios.get(`${query}/Contabilidad/FacturasPagar`);
}