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

    }

    static async msgHandler() {

    }

    static async errorHandler() {

    }

    static async quit() {

    }

    static async startHeartbeat() {

    }

    static async stopHeartbeat() {

    }

    static async sendMsg() {

    }


}

(async () => {
    const tkn = localStorage.getItem("token");
    if (tkn === null) return window.location.href = "/login";

    // Start Socket Connection
    await ClientWS.init(tkn);

})();