import axios from 'axios';

const query:string = "http://localhost:3001";

export function getProductos(){
    return axios.get(`${query}/productos`);
}