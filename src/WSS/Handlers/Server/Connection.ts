import { IncomingMessage } from "http";
import { HEARTBEAT_INTERVAL, OPCodes } from "../../../util/WSValues";
import {colors as leeks} from "leeks.js";

export default (async (ws:AFECWS.AFECServer, skt: AFECWS.ClientSocket, rq: IncomingMessage) => {

    console.log(leeks.magenta(`[AFEClassroom - WS] [Client>>Server] Incoming Connection from ${rq.connection.remoteAddress} (${skt.id})`));

    // init props
    skt.props = {
        userId: null,
        sequence: 0,
        lastHeartbeat: Date.now()
    }    

    skt
        .on("message", require("./Message").default.bind(null,ws,skt,rq))
        .on("close", require("./Close").default.bind(null,ws,skt,rq))
        //.on("error", require("./error").default.bind(null,ws,skt,rq));


    skt.authenticated = false;

    // send hello packet
    skt.sendAsync({
        op: OPCodes.HELLO,
        d: {
            
            heartbeatInterval: HEARTBEAT_INTERVAL,
        }
    });

});