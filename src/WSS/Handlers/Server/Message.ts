import { IncomingMessage } from "http";
import WebSocket from "ws";
import { colors as leeks } from "leeks.js";
import { HEARTBEAT_INTERVAL, OPCodes } from "../../../util/WSValues";
import Database from "../../../DB";

let db = new Database();

export default (async (ws:AFECWS.AFECServer, skt: AFECWS.ClientSocket, rq: IncomingMessage, payload: WebSocket.Data) => {
    let dt;

    try {
        dt = JSON.parse(payload.toString());
    } catch(e) {
        dt = null;
    }
    
    // close with error
    if (dt === null) return skt.close();

    // check if authed.
    if (!skt.authenticated && dt.op !== OPCodes.AUTH) return skt.close();

    console.log(leeks.blueBright(`[AFEClassroom - WS] [Client>>Server] Recieved OP Code >${dt.op}< from ${skt.id}`));
    // Message Handler
    switch (dt.op) {
        case OPCodes.AUTH: {
            const { d } = dt;

            if (!d.t) return skt.close();

            let u = await db.getUserById(d.t);
            if (u) skt.authenticated = true;
                else return skt.close(); // invalid token
        }
    }

});