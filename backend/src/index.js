import express from "express";
import "dotenv/config";
import appMiddleware from "./middleware/index.js";

const app = express();


app.use(appMiddleware);


export default app;
