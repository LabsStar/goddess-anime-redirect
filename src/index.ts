import express from "express";
const app = express();
import cron from "node-cron";
import bodyParser from "body-parser";
import { URLSearchParams } from "url";
import cookieParser from "cookie-parser";
import path from "path";
import ejs, { render } from "ejs";
import axios from "axios";
import { config } from "dotenv";
config()
import getuser from "./services/domainGetter";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.set("trust proxy", 1);
app.use((req, res, next) => {
  res.setHeader("X-Powered-By", "Hyperstar");
  next();
});

app.get("/:username?", async (req, res) => {
    const username = req.params.username;

    if (!username) return res.redirect("https://goddessanime.com")

    console.log(req.hostname)
    
    getuser(username.toLowerCase(), req.hostname, req, res);
});

app.listen(process.env.PORT || 4375, () => {
  console.log(
    `Goddess Anime is listening at http://localhost:${process.env.PORT || 4574}`
  );
});
