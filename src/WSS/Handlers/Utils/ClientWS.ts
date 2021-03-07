/// <reference path="../../../util/@types/wss.d.ts" />

// @ts-ignore
class ClientWS {
    static socket: WebSocket;
    static token: string;
    static sq: number;
    static hb_int: number;
    static timeout: NodeJS.Timeout;
    static props = {
        init: null,
        connect: null,
        open: null,
        hello: null,
        ready: null,
        hb: null,
        hb_ack: null
    };

    static async init(t: string) {
        this.props.init = Date.now();
        this.socket = new WebSocket(`ws://localhost:1337`);
        this.props.connect = Date.now();

        this.token = t;

        this.socket.addEventListener("message", this.msgHandler.bind(this));
        this.socket.addEventListener("open", this.handle.bind(this));
        this.socket.addEventListener("close", this.closeHandler.bind(this));
        this.socket.addEventListener("error", this.errorHandler.bind(this));

    }

    static async handle(ev: Event) {
        
    }

    static async msgHandler(ev: MessageEvent<string>) {
        const dt = JSON.parse(ev.data);
        if (dt.s) this.sq = dt.s;
        switch (dt.op)
        {
            // HELLO > Respond With Auth
            case 0: {
                this.props.hello = Date.now();
                this.sendMsg({
                    op: 3,
                    d: {
                        t: this.token
                    }
                });
                this.hb_int = dt.d.heartbeatInterval;
                break;
            }

            // READY > Start Heartbeat
            case 4: {

            }
        }
    }

    static async errorHandler(ev: Event) {

    }

    static async closeHandler(ev: CloseEvent) {

    }

    static async quit() {

    }

    static async startHeartbeat(int: number) {
        this.hb_int = int;
        this.timeout = setInterval(() => {
            this.props.hb = Date.now();
            this.sendMsg({
                op:2,
                d: this.sq
            });
        }, int);
    }

    static async stopHeartbeat() {
        if (this.timeout) clearInterval(this.timeout);
    }

    static async sendMsg(d: any) {
        this.socket.send(JSON.stringify(d));
    }


}

(async () => {
    const tkn = localStorage.getItem("token");
    if (tkn === null) return window.location.href = "/login";

    // Start Socket Connection
    await ClientWS.init(tkn);

})();