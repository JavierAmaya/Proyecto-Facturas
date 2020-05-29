import axios from 'axios';

const query:string = "http://localhost:3001";

export function getProveedores(){
    return axios.get(`${query}/proveedores`);
}

export function getInformacionProveedor(id:string): Promise<any> {
    return new Promise<any>(resolve=>{
        axios.get(`${query}/proveedor/${id}/informacion`)
        .then(result => resolve(result))
        .catch(error => resolve( {data: {successed:false}} ));
    });
}    
export function addProveedor(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/proveedor`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}