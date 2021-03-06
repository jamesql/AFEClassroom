import WebSocket from "ws";
import {colors as leeks} from "leeks.js";

Object.defineProperty(WebSocket.prototype, "sendAsync", {
    async value(this: AFECWS.ClientSocket, d: any) {
		if (this.readyState !== WebSocket.OPEN) return;
        console.log(leeks.green(`[AFEClassroom - WS] [Server>>Client] Sent OP Code >${d.op}< to ${this.id}`));
		return new Promise<void>((a, b) =>
			this.send(typeof d !== "string" ? JSON.stringify({
				...d,
				s: d.s ?? ++this.props.sequence
			}) : d, (e) => !e ? a() : b(e))
		);
	}
});

Object.defineProperty(WebSocket.prototype, "id", {
    get(this: AFECWS.ClientSocket) {
        return this._id || (this._id = Date.now().toString());
    }
});