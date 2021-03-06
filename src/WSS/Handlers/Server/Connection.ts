import { IncomingMessage } from "http";


export default (async (ws:AFECWS.AFECServer, skt: AFECWS.ClientSocket, rq: IncomingMessage) => {

    console.log(`[AFEClassroom - WS] Incoming Connection from ${rq.connection.remoteAddress} (${skt.id})`);

    // init props
    skt.props = {
        userId: null,
        sequence: 0,
        lastHeartbeat: Date.now()
    }    

    skt
        .on("message", require("./Message").bind(null,ws,skt,rq))
        .on("close", require("./Close").bind(null,ws,skt,rq))
        .on("error", require("./error").bind(null,ws,skt,rq));


    skt.authenticated = false;

    // send hello packet
    skt.sendAsync({
        
    });

});