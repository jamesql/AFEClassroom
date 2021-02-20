import * as http from "http";
import * as https from "https";
import WebSocket from "ws";
import cfg from "../../../config"

// add https
export default async function StartWSS() : Promise<http.Server> {
    const ws = new WebSocket.Server
    return null;
};