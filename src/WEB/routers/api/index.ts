/// <refrence path="../../util/@types/global.d.ts" />

import express from "express";
import { Authenticate } from "../../../util/Auth"
import { User } from "../../../DB/Structures";

const app = express.Router();
const a = new Authenticate();

// temp fix
declare module 'express-session' {
    interface SessionData {
      user: User;
    }
  }

app
    .post("/login", async (req,res) => {
        const d = req.body;
        if (!d || !d.username || !d.password) return res.send({code: 400});
        
        const r = await a.authLogin(d.username, d.password);

        if (r.authed) {
                 req.session.user = r.user;
                 console.log("n:\n" + req.session);
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
            req.session.user = r.user;
            return res.send(r);
        } else {
            return res.send(r);
        }
    })
    .post("/logout", async(req,res) => {
        req.session.user = null;
        res.redirect("/");
    });

export default app;
