/// <refrence path="../../util/@types/global.d.ts" />

import express from "express";
import { Authenticate } from "../../../util/Auth"

const app = express.Router();
const a = new Authenticate();

// fix req.user need to fix sessions

app
    .post("/login", async (req,res) => {
        console.log(req);
        const d = req.body;
        if (!d || !d.username || !d.password) return res.send({code: 400});

        const r = await a.authLogin(d.username, d.password);

        if (r.authed) {
                 req.user = r.user;
                 console.log(req.user);
                 return res.send(r);
        } else {
            return res.send(r);
        }
    })
    .post("/register", async(req,res) => {
        const d = req.body;
        if (!d || !d.username || !d.password) return res.send({code: 400});

        const r = await a.authRegister(d.username, d.password);

        if (r.success) {
            req.user = r.user;
            return res.send(r);
        } else {
            return res.send(r);
        }
    })
    .post("/logout", async(req,res) => {
        req.user = null;
        res.redirect("/");
    });

export default app;