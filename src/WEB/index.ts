/// <refrence path="../util/@types/global.d.ts" />

import express from "express";
import morgan from "morgan";
import session from "express-session";
import http from "http";
import https from "https";
import config from "../config";
import { colors as leeks } from "leeks.js";

const app = express();

morgan
	.token("domain", (req: express.Request, res: express.Response, arg) => req.hostname)
	.token("status-c", (req, res, arg) => {
		if (res.statusCode >= 200 && res.statusCode <= 299) return leeks.green(res.statusCode.toString());
		else if (res.statusCode >= 300 && res.statusCode <= 399) return leeks.cyan(res.statusCode.toString());
		else if (res.statusCode >= 400 && res.statusCode <= 499) return leeks.yellow(res.statusCode.toString());
		else if (res.statusCode >= 500 && res.statusCode <= 599) return leeks.red(res.statusCode.toString());
		else return res.statusCode.toString();
	});

app
    .use(session({
        name: "AFEClassroom",
        secret: config.web.cookieSecret,
        cookie: {
            maxAge: 8.64e7,
        },
        resave: false,
        saveUninitialized: true
    }))
    .set("trust proxy", true)
    .set("views", `${__dirname}/views`)
    .set("view engine", "ejs")
    .set("view options", { pretty: true })
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(morgan("[AFEClassroom - :domain] :method :status-c :response-time ms - :res[content-length]"))
    .use(express.static(`${__dirname}/public`))
    .use("/", require("./routers/index").default);

async function start() {
    (config.web.secure ? https : http)
        .createServer(config.web.serverOptions, app)
        .listen(config.web.port, config.web.host, () =>
            console.log(leeks.green(`[AFEClassroom - Startup] HTTP Server Started on ${config.web.port}`))
        );
}


export default start as any;