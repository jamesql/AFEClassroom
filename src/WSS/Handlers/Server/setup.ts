/// <reference path="../../../util/@types/wss.d.ts" />

import * as http from "http";
import * as https from "https";
import WebSocket from "ws";
import cfg from "../../../config"

// add https
export default async function StartWSS(server: http.Server) : Promise<AFECWS.AFECServer> {
    const ws = new WebSocket.Server({ server }) as AFECWS.AFECServer;

    // heartbeat
    setInterval(() => {
        
    }, 1e3)

    return ws;
};