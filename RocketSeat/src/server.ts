import "reflect-metadata";
import express from "express";
import { router } from "./routes";

import "./database";


const app = express();

app.use(express.json());
app.use(router);

// app.get("/status", (request, response) => {
//   return response.send("Running");
// });

app.listen(3000, () => console.log("Server is running"));
