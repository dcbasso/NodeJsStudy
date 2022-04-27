import "reflect-metadata";
import express from 'express';
import '@controllers/UserController';
import { router } from "./routes"


import "./database"

const app = express();


app.use(express.json);
app.use(router);


app.get('/', (request, response) => {
    return response.json({ runnig : 'true'});
})

app.listen(3000, () => console.log("Server is running..."));