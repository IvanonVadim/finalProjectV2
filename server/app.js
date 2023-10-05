const express = require('express');
const serverConfig = require('./config/serverConfig');

const app = express();

const PORT = 3000;
serverConfig(app);
const indexRoute = require('./routes/index.route');

app.use('/', indexRoute);


app.listen(PORT, () => console.log(`Наш сервер пашет на ${PORT}  порту`));
