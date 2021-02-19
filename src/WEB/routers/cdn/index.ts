/// <refrence path="../../util/@types/global.d.ts" />
import express from "express";
import busboy from "connect-busboy";

const app = express.Router();

app
    .get("/", async (req,res) => {
        res.render("index");
    })
    .post("/work-upload", async(req,res) => {
        var pipe = new busboy(req.headers);
        pipe.on('file', function(fieldname, file, filename, encoding, mimetype) {
            console.log(`File ${fieldname} : filename : ${filename}`);
        });
    })
    .post("/assignment-upload", async(req,res) => {

    })
    .post("/announcement-upload", async(req,res) => {

    });

export default app;