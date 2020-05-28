import { ViewEntity, ViewColumn} from "typeorm";

@ViewEntity({schema:"pFacturas",database:"ingreso_vehiculos",name:"ViewUsuarioAcceder"})
export class ViewUsuarioAcceder{
    @ViewColumn() EmailEmpleado:string;
    @ViewColumn() UsuarioAsignado:string;
    @ViewColumn() Password:string;
}