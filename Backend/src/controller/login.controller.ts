import {Application} from "express";
import {LoginService} from "../services/login.service";

export class LoginController {

    login_service : LoginService;

    constructor (private app: Application){
        this.login_service = new LoginService();
        this.routes();
    }

    private routes (){
        this.app.route("/login").post(this.login_service.login)
    }
}