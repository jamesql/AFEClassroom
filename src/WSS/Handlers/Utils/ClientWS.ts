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

    static async init() {

    }

    static async msgHandler() {

    }

    static async errorHandler() {

    }

    static async quit() {

    }

    static async startHeartbeat() {
        
    }


}

(async () => {
    const token = localStorage.getItem("token");
    if (token === null) return window.location.href = "/login";



})();