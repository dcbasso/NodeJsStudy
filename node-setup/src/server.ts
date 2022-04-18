import express from 'express';
import '@controllers/UserController';

const app = express();


app.get('/', (request, response) => {
    return response.json({ runnig : 'true'});
})

app.listen(3000);