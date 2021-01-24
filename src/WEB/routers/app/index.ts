/// <refrence path="../../util/@types/global.d.ts" />
import express from "express";

const app = express.Router();

app
    .get("/", async (req,res) => {
        await checkAuth(req,res);
        res.render("index");
    })
    .get("/login", async(req,res) => {
        res.send("login page");
    })
    .get("/register", async(req,res) => {
        
    })
    .get("/logout", async(req,res) => {
        
    })
    .get("/class", async(req,res) => {
        
    })
    .get("/classroom", async(req,res) => {
        
    });

    function checkAuth(req: express.Request, res: express.Response) { if(!req.user) return res.redirect("/app/login"); }

export default app;