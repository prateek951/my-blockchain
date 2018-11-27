const express = require('express');
const app = express();
const blockchainController = require('./controllers/chain');

app.get('/',blockchainController.getHelloWorld);




const { PORT } = process.env;
const port = PORT || 3000;
app.listen(port, () => console.log(`server spinning on ${port}`));