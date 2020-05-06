import axios from "axios";

const query:string = "http://localhost:3001";

export function getSuppliers() {
    return axios.get(`${query}/suppliers`);
}