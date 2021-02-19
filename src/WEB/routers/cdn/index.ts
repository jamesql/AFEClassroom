/// <refrence path="../../util/@types/global.d.ts" />
import express from "express";

const app = express.Router();

app
    .get("/", async (req,res) => {
        res.render("index");
    })
    .post("/work-upload", async(req,res) => {

    })
    .post("/assignment-upload", async(req,res) => {

    })
    .post("/announcement-upload", async(req,res) => {
        
    });

export default app;