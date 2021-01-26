/// <refrence path="../util/@types/global.d.ts" />
import { 
    User, 
    Class, 
    Assignment, 
    Announcement,
    School,
    Work } from "./Structures";
import mysql, { Connection, Query } from "mysql";
import config from "../config";
import Snowflake from "../util/Snowflake";

class Database {
    static db: Connection;
    constructor() {
        if (!Database.db)
            Database.connect();
    }

    static connect()
    {
        const cfg = config.database;
        //this?
        Database.db = mysql.createConnection({
            host: cfg.host,
            user: cfg.auth.user,
            password: cfg.auth.password,
            database: cfg.db
        });
    }

    static disconnect() { Database.db.end(); }

    execute(q: string, args: any) : Promise<Query>
    {
        if (!Database.db) throw new TypeError("Error! Connection Null!");
        return new Promise<Query>( (resolve,reject) => {
            Database.db.query(q, args, (err, res) => { if (err) return reject(err); 
                resolve(res);
            });
        });
    }

    async getUserByName(un: string) : Promise<User>
    {
        const r = await this.execute("SELECT * from users WHERE username=?", [un]);
        const d = r[0];

        if (!d) return null;

        return new User(d);
    }

    async getUserById(id: string) : Promise<User>
    {
        const r = await this.execute("SELECT * from users WHERE id=?", [id]);
        const d = r[0];

        if (!d) return null;

        return new User(d);
    }

    async createUser(username: string, password: string, name: string) : Promise<User>
    {
        const sf = Snowflake.generate();
        const r = await this.execute("INSERT INTO users (id,username,name,password) VALUES(?,?,?,?)", [sf,username,name,password]);
        const d = r[0];

        if (!d) return null;

        return new User(d);
    }

    async createClass(t_id: string)
    {
        const sf = Snowflake.generate();
        
    }

    async createAnnouncement(a_id: string, a_name: string, text: string, files?: string) : Promise<Announcement>
    {
        if (!files) files="[]";
        const sf = Snowflake.generate();
        const r = await this.execute("INSERT INTO announcements (id,a_id,a_name,text,files)", [sf,a_id,a_name,text,files]);
        const d = r[0];

        if (!d) return null;
        return new Announcement(d);
    }

    async createAssignment()
    {

    }

    async createWork()
    {

    }

    async getUserClasses(username: string) : Promise<Class[]>
    {
        return null;
    }

    async getClassAssignmentsById(id: string) : Promise<Assignment[]>
    {
       return null; 
    }

    async getAssignmentById(id: string) : Promise<Assignment>
    {
        return null;
    }

    async getPermissionLevel(id: string) : Promise<string>
    {
        const r = await this.execute("SELECT * from users WHERE id=?", [id]);
        const d = r[0];
        const u = new User(d);
        if (!d) return null;

        return u.permission;
    }

    async setPermissionLevel(id: string, nPrm: string) : Promise<User>
    {
        return null;
    }

    async addFilesToWork()
    {

    }
    
}

export default Database;