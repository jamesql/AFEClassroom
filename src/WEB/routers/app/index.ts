/// <refrence path="../../util/@types/global.d.ts" />
import express from "express";
import Database from "../../../DB";

const app = express.Router();
const db = new Database();

app
    .get("/", async (req: express.Request, res) => {
        if(!req.session.user) return res.redirect("/app/login");
        res.render("index");
    })
    .get("/login", async(req,res) => {
        if(!req.session.user) return res.render("pages/login");
            else return res.redirect("/app");
    })
    .get("/register", async(req,res) => {
        if(!req.session.user) return res.render("pages/register");
            else return res.redirect("/app");
    })
    .get("/logout", async(req,res) => {
        
    })
    .get("/class", async(req,res) => {
        
    })
    .get("/classroom/:id", async(req,res) => {
        const user = req.session.user;
        if (!user) return res.redirect("/app/login");
        const u_c = await db.getUserClasses(user.id);
        const c_id = req.params.id;
        const c = await db.getClassById(c_id);
        if (!c) return res.send("404 - Page not found!");
        const a = await db.getClassAssignmentsById(c_id);
        res.send(c);

    });

export default app;
