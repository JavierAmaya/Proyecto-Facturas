import axios from 'axios';

const query:string = "http://localhost:3001";

export function getClientes(){
    return axios.get(`${query}/clientes`);
}

export function updateProduct() {
    //return axios.put()
}

export function getInformacionClientes(id:string): Promise<any> {
    return new Promise<any>(resolve=>{
        axios.get(`${query}/cliente/${id}/informacion`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function addCliente(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/cliente`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}