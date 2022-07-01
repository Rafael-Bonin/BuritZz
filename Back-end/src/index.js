const express = require('express');
const Router = require('./routes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(Router);

app.listen(process.env.PORT, () => {
  console.log('ta funcionando paizao');
});
