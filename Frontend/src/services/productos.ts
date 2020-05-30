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

export function addProducto(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/producto`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function updateProducto(id:string,data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.put(`${query}/producto/${id}`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function deleteProducto(id:string): Promise<any> {
    return new Promise<any>(resolve=>{
        axios.delete(`${query}/producto/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
    
}
