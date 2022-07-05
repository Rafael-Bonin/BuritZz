const express = require('express');
const Router = require('./routes');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(Router);

app.use((err, _req, res, _next) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: err.message });
});

app.listen(process.env.PORT, () => {
  console.log('ta funcionando paizao');
});
