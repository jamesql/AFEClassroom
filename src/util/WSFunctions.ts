import WebSocket from "ws";

Object.defineProperty(WebSocket.prototype, "sendAsync", {
    async value(this: AFECWS.ClientSocket, d: any) {
		if (this.readyState !== WebSocket.OPEN) return;
		return new Promise<void>((a, b) =>
			this.send(typeof d !== "string" ? JSON.stringify({
				...d,
				s: d.s ?? ++this.props.sequence
			}) : d, (e) => !e ? a() : b(e))
		);
	}
});