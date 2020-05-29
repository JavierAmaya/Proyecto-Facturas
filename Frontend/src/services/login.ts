import axios from "axios";

const query: string = "http://localhost:3001"

export function requestLogin(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.get(`${query}/login`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function postLogin(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/login`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}