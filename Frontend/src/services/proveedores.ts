import axios from 'axios';

const query:string = "http://localhost:3001";

export function getProveedores(){
    return axios.get(`${query}/proveedores`);
}

