import { IncomingMessage } from "http";
import WebSocket from "ws";

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

    // Message Handler
    switch (dt.op) {

    }

});