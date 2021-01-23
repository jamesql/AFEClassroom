import Database from "../DB";
import { User } from "../DB/Structures";
import * as c from "bcrypt";

export { Authenticate };

interface AuthResponse {
    authed: boolean;
    failReason?: string;
    code?: number;
    user?: User;
}

interface RegisterResponse {
    success: boolean;
    failReason?: string;
    code?: number;
    user?: User;
}

class Authenticate {
    db = new Database();

    async authLogin(un:string, pwd: string) : Promise<AuthResponse> {
        const u = await this.db.getUserByName(un);
        const a = await c.compare(pwd, u.password);
        if (a) return <AuthResponse>{authed:true,user:u};
            else return <AuthResponse>{authed:false, failReason:"Incorrect Username/Password."};
    }

    async authRegister(un:string, pwd: string) : Promise<RegisterResponse> {
        const u = await this.db.getUserByName(un);
        if (u) return <RegisterResponse>{success:false,failReason:"User already exists with this username."};

        const h = await c.hash(pwd, 10);
        const r = await this.db.createUser(un, h);

        if (!r) return <RegisterResponse>{success:false,failReason:"An error occured while creating your account."};

        return <RegisterResponse>{success:true,user:r};
    }

}