import axios from 'axios';

const query:string = "http://localhost:3001";

export function getCategorias(){
    return axios.get(`${query}/categorias`);
}