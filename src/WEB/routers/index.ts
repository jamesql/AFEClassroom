/// <refrence path="../../util/@types/global.d.ts" />
import express from "express";

const app = express.Router();

app
    .get("/", async (req,res) => {
        res.render("index");
    })
    .use("/api", require("./api/index").default)
    .use("/app", require("./app/index").default)
    .use("/cdn", require("./cdn/index").default);

export default app;