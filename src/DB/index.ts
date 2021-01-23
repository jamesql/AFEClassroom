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

    

}

export default Database;