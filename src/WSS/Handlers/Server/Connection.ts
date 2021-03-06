import { IncomingMessage } from "http";


export default (async (ws:AFECWS.AFECServer, skt: AFECWS.ClientSocket, rq: IncomingMessage) => {

    console.log(`[AFEClassroom - WS] Incoming Connection from ${rq.connection.remoteAddress} (${skt.id})`);

    // init props
    

});