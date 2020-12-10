const express = require('express');
const path = require('path');
const app = express();
const userRoute = require('./src/routes/routes')








app.use(userRoute);


app.listen(3000, () => console.log('Listening in port 3000'));