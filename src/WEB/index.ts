/// <refrence path="../util/@types/global.d.ts" />

import express from "express";
import morgan from "morgan";
import session from "express-session";
import http from "http";
import https from "https";
import config from "../config";

const app = express();

app

    .use(session({
        name: "octogonl",
        secret: config.web.cookieSecret,
        cookie: {
            maxAge: 8.64e7,
            secure: true
        },
        resave: false,
        saveUninitialized: true
    }))
    .set("trust proxy", true)
    .set("views", `${__dirname}/views/templates`)
    .set("view engine", "ejs")
    .set("view options", { pretty: true })
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(morgan("dev"))
    .use(express.static(`${__dirname}/public`))
    .use("/", require("./routers/index").default);

async function start() {
    (config.web.secure ? https : http)
        .createServer(config.web.serverOptions, app)
        .listen(config.web.port, config.web.host, () =>
            console.log(`Listening on http${config.web.secure ? "s" : ""}://${config.web.host}:${config.web.port}`)
        );
}


export default start as any;