import axios from 'axios';

const query:string = "http://localhost:3001";

export function getClientes(){
    return axios.get(`${query}/clientes`);
}

export function updateProduct() {
    //return axios.put()
}