import "reflect-metadata";
import express from "express";

import "./database";


const app = express();

app.get("/status", (request, response) => {
  return response.send("Running");
});

// app.post("/test-post", (request, response) => {
//   return response.send("Olá NLW método POST");
// });

app.listen(3000, () => console.log("Server is running"));
