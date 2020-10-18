import express, { response } from "express";
import cors from "cors";
const app = express();
import path from "path";
import bodyParser from "body-parser";
import session from "express-session";
import cookieParser from "cookie-parser";
import compression from "compression";

const hour = 3600000;
const rememberMeExpiration = 2 * 365 * 24 * hour; //2 years

app.use(compression());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.use(cookieParser());
app.use(session({ secret: "adam_booklist", saveUninitialized: true, resave: true }));

const statics = ["/static/", "/node_modules/", "/dist/"];
statics.forEach((folder) => app.use(folder, express.static(__dirname + folder)));

const modules = [""];
modules.forEach((name) => app.get("/" + name, browseToSvelte));

app.get("/*.js", express.static(__dirname + "/dist/"));

function browseToSvelte(request, response) {
  response.sendFile(path.join(__dirname + "/dist/index.html"));
}

process.on("exit", shutdown);
process.on("SIGINT", shutdown);

function shutdown() {
  process.exit();
}

app.listen(8080);

export default null;
