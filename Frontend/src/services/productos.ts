import axios from 'axios';

const query:string = "http://localhost:3001";

export function getProductos(){
    return axios.get(`${query}/productos`);
}

export function getDetalleProducto(id:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/producto/${id}/detalle`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}