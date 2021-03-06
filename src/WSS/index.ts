/// <refrence path="../util/@types/global.d.ts" />
import StartWSS from "./Handlers/Server/setup"
import * as http from "http";
import config from "../config";
import { colors as leeks } from "leeks.js";

const sv = http.createServer();
let gws;

export default async function launchWSS() {
    // start websocket
    gws = await StartWSS(sv);

    // start listening
    sv.listen(config.ws.port, config.ws.host, () => console.log(leeks.green(`[AFEClassroom - Startup] WebSocket Started on ${config.ws.host}:${config.ws.port}`)));
};

export { gws };