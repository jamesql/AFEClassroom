import Database from "../DB";
import { User } from "../DB/Structures";
import * as c from "bcrypt";

export { Authenticate };

interface AuthResponse {
    authed: boolean;
    failReason?: string;
    code?: number;
}

interface RegisterResponse {
    success: boolean;
    failReason?: string;
    code?: number;
}

class Authenticate {
    db = new Database();

    async authLogin(un:string, pwd: string) : Promise<AuthResponse> {
        const u = await this.db.getUserByName(un);
        const a = await c.compare(pwd, u.password);
        if (a) return <AuthResponse>{authed:true};
            else return <AuthResponse>{authed:false, failReason:"Incorrect Username/Password"};
    }

    async authRegister() : Promise<RegisterResponse> {
        return null;
    }

}