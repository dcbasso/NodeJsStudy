import express, { response } from 'express';

const app = express();


app.get('/', (request, response) => {
    return response.json({ runnig : 'true'});
})

app.listen(3000);