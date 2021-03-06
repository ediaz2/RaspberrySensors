import { App } from "@tinyhttp/app";
import { cors } from "@tinyhttp/cors";
import { logger } from "@tinyhttp/logger";
import { tinyws } from "tinyws";
import { json } from "milliparsec";
import sirv from "sirv";

import { PORT } from "../config/index.js";
import routes from "./routers/index.js";

const app = new App();

/* ======= SETTINGS ======= */
app.set("port", PORT);

/* ======= MIDDLEWARE ======= */
app.use(logger());
app.use(cors());
app.use(json());
app.use(tinyws());

/* ======= STATIC ======= */
app.use("/", sirv("public"));

/* ======= ROUTES ======= */
app.route(routes);

export default app;
