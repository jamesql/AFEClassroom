/// <refrence path="../../util/@types/global.d.ts" />
import express from "express";

const app = express.Router();

app
    .get("/", async (req,res) => {
        if(!req.user) return res.redirect("/app/login");
        res.render("index");
    })
    .get("/login", async(req,res) => {
        if(!req.user) return res.render("pages/login");
            else return res.redirect("/app");
    })
    .get("/register", async(req,res) => {
        if(!req.user) return res.render("pages/register");
            else return res.redirect("/app");
    })
    .get("/logout", async(req,res) => {
        
    })
    .get("/class", async(req,res) => {
        
    })
    .get("/classroom", async(req,res) => {
        
    })
    .get("/class-grades", async(req,res) => {
        
    })
    .get("/assignment", async(req,res) => {
        
    })
    .get("/material", async(req,res) => {
        
    });

export default app;