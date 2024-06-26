import express from "express";
const helmet = require("helmet");

import cors from "cors";
import addApp from "../db/addApp";
import getAllAppIds from "../db/getAllAppIds";
import getAllApps from "../db/getAllApps";
import getApp from "../db/getApp";
import swaggerUi from "swagger-ui-express";
import session from "express-session";
import mongo from "connect-mongodb-session";
import cookieParser from "cookie-parser";
import getAppsByPage from "../db/getAppsByPage";
import getAppCount from "../db/getAppCount";
import generatedDocs from "../../swagger-output.json";
import editApp from "../db/editApp";
import getPlayStoreData from "../db/getPlayStoreData";
import getStaff from "../db/getStaff";
import { MONGO_URI } from "../db/util";
import { App } from "../types";
import { DiscordUser } from "../hooks/useDiscord";

// const MongoDBStore = mongo(session);

const app = express();
const port = +process.env.PORT || 5000;
const hostname = process.env.HOSTNAME || "localhost";

app.set("trust proxy", 1); // trust first proxy

declare module "express-session" {
  interface SessionData {
    userId: string;
    userName: string;
  }
}

// const store = new MongoDBStore(
//   {
//     MONGO_URI,
//     databaseName: "sessionStorage",
//     collection: "sessions",
//   },
//   function (error) {
//     // Should have gotten an error
//     console.error(error);
//   }
// );

var whitelist = [
  "https://flixbox.github.io",
  "http://localhost:3000",
  "https://luck.up.railway.app",
];

// app.use(
//   "/api-docs",
//   swaggerUi.serve,
//   swaggerUi.setup(generatedDocs, { explorer: true })
// );
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);
app.use(
  session({
    name: "session",
    secret: process.env.SESSION_KEY_1,
    resave: true,
    saveUninitialized: true,
    cookie: {
      path: "/",
      maxAge: 1000 * 60 * 60 * 2, // 2 hrs
      secure: true,
      sameSite: "none",
      httpOnly: true,
    },
    // store: store,
  })
);
app.use(cookieParser());

app.get("/", async (req, res) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.send("Hello World!");
});

app.get("/apps/count", async (req, res) => {
  res.send(await getAppCount());
});

app.get("/apps/get/:appId", async (req, res) => {
  res.send(await getApp(req.params.appId));
});

app.get("/apps/all", async (req, res) => {
  const allApps = await getAllApps();
  res.send(allApps);
});

app.get("/apps/page/:page/:pagesize", async (req, res) => {
  const apps = await getAppsByPage(+req.params.page, +req.params.pagesize);
  res.send(apps);
});

app.get("/apps/all/ids", async (req, res) => {
  const allApps = await getAllAppIds();
  res.send(allApps);
});

app.post("/apps/add/", async (req, res) => {
  /*  #swagger.parameters['app'] = {
                in: 'body',
                description: 'App information.',
                required: true,
                schema: { $ref: "#/definitions/AppCompatData" }
      } 
  */
  const { app, discordUser } = req.body as {
    app: App;
    discordUser: DiscordUser;
  };
  res.send(await addApp(app, discordUser.username, discordUser.id, res));
});

app.post("/apps/edit/", async (req, res) => {
  const { app, discordUser } = req.body as {
    app: App;
    discordUser: DiscordUser;
  };
  res.send(await editApp(app, discordUser.username, discordUser.id, res));
});

app.get("/playstore/get/:appId", async (req, res) => {
  res.send(await getPlayStoreData(req.params.appId));
});

app.get("/playstore/search/:title", async (req, res) => {
  const { search } = ((await import("google-play-scraper")) as any).default;
  res.send(await search({ term: req.params.title, num: 6 }));
});

app.get("/staff/all", async (req, res) => {
  const staff = await getStaff();
  res.send(staff);
});

app.listen(port, hostname, () => {
  console.log(`Express listening on port ${hostname}:${port}!`);
});
