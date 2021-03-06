/// <refrence path="../util/@types/global.d.ts" />
import StartWSS from "./Handlers/Server/setup"
import * as http from "http";


const sv = http.createServer({});


export default async function launchWSS() {
    await StartWSS();
};