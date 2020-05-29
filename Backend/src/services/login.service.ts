import {Request,Response} from "express";
import {getConnection} from "typeorm";
import {ILogin} from "../entity/login.entity"
import {IResult} from "../interfaces/Iresult"
export class LoginService{
    
    public async login(req: Request , res:Response){
        const payload: ILogin = req.body;  
        console.log(req.body);      
        const result: IResult[] = await getConnection().query(`
        EXEC pFacturas.SP_LOGIN
        @Correo = '${payload.correo}',
        @Password = '${payload.password}'`);
        res.status(201).json(result[0]); 
        console.log("esta iniciando sesion")
        console.log(payload.correo)
        console.log(payload.password)
        console.log(result[0])
    }
}

export default LoginService;