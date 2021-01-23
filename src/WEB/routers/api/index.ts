/// <refrence path="../../util/@types/global.d.ts" />
import express from "express";
import { Authenticate } from "../../../util/Auth"

const app = express.Router();
const a = new Authenticate();

app
    .post("/login", async (req,res) => {
        const d = req.body;
        if (!d || !d.username || !d.password) return res.send({code: 400});

        const r = await a.authLogin(d.username, d.password);

        if (r.authed) {
            
        } else {
            
        }
    });

export default app;