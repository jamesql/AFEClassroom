/// <refrence path="../../util/@types/global.d.ts" />
import express from "express";
import Database from "../../../DB";

const app = express.Router();
const db = new Database();

app
    .get("/", async (req: express.Request, res) => {
        if(!req.session.user) return res.redirect("/app/login");
        const cs = await db.getUserClasses(req.session.user.id);
        res.render("pages/app", {classes: cs});
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
        req.session.user = null;
        res.redirect("/");
    })
    .get("/class/:id", async(req,res) => {
        const user = req.session.user;
        if (!user) return res.redirect("/app/login");
        const u_c = await db.getUserClasses(user.id);
        const c_id = req.params.id;
        const c = await db.getClassById(c_id);
        if(u_c.findIndex(i=>i.id===c.id) === -1) return res.send("You are not in this class!");
        if (!c) return res.send("404 - Page not found!");
        if (user.permission === "teacher") res.render("pages/meetingteacher", []);
        else res.render("pages/meeting", []);

    })
    .get("/classroom/:id", async(req,res) => {
        const user = req.session.user;
        if (!user) return res.redirect("/app/login");
        const u_c = await db.getUserClasses(user.id);
        const c_id = req.params.id;
        const c = await db.getClassById(c_id);
        if(u_c.findIndex(i=>i.id===c.id) === -1) return res.send("You are not in this class!");
        if (!c) return res.send("404 - Page not found!");
        const a = await db.getClassAssignmentsById(c_id);
        if (user.permission === "teacher") res.render("pages/teacher", []);
            else res.send([a,c]);
    });

export default app;
