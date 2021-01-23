/// <refrence path="../util/@types/global.d.ts" />
import { 
    User, 
    Class, 
    Assignment, 
    Announcement,
    School,
    Work } from "./Structures";
import mysql, { Connection, Query } from "mysql";

class Database {
    static connected = false;
    private constructor() {
        throw new TypeError("Use static methods, no instantiation.");
    }

    static init() {

    }

}

export default Database;