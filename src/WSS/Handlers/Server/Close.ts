import { IncomingMessage } from "http";
import { colors as leeks } from "leeks.js";

export default (async (ws: AFECWS.AFECServer, skt: AFECWS.ClientSocket, rq: IncomingMessage, ec: number, r: string) => {
    console.log(leeks.redBright(`[AFEClassroom - WS] [Client>>Server] Connection from ${rq.connection.remoteAddress} (${skt.id}) closed [${r || "NONE"}]`));
});