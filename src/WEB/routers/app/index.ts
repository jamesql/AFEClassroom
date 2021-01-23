/// <refrence path="../../util/@types/global.d.ts" />
import express from "express";

const app = express.Router();

app
    .get("/", async (req,res) => {
        res.render("index");
    })
    .get("/login", async(req,res) => {

    })
    .get("/register", async(req,res) => {
        
    })
    .get("/logout", async(req,res) => {
        
    })
    .get("/class", async(req,res) => {
        
    })
    .get("/classroom", async(req,res) => {
        
    });

export default app;