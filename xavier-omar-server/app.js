require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const pgp = require('pg-promise')();
const connectionString = process.env.DB_CONNECT;
const db = pgp(connectionString);

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({ success: true });
});

app.listen(process.env.PORT, () => {
  console.log('Server is running..');
});
