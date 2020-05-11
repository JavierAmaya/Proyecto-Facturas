import {Request,Response} from "express";
import {getConnection} from "typeorm";
import {Empleado,IEmpleado,IResult} from "../entity/empleado.entity";


export class EmpleadoService{
    public async ValidarUsuario(req: Request , res:Response){
        const P : IEmpleado = req.body;
        const result: IResult[] = await getConnection().query(`
        EXEC pFacturas.SP_VALIDE_EMPLOYEE
        @EmailEmpleado = ${P.EmailEmpleado},
        @UsuarioAsignado = ${P.UsuarioAsignado},
        @Password = ${P.Password}`);
        res.status(215).json(result[0]); 
    }
}