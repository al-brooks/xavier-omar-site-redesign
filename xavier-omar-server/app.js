require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.SECRET_KEY);
const { v4: uuidv4 } = require('uuid');

const app = express();
const pgp = require('pg-promise')();
const connectionString = process.env.DB_CONNECT;
const db = pgp(connectionString);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes

app.get('/', (req, res) => {
  res.send('Node Server is Working!');
});

app.get('/api/music', (req, res) => {
  db.any('SELECT* FROM music')
    .then((music) => {
      res.json(music);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('/api/videos', (req, res) => {
  db.any('SELECT* FROM videos')
    .then((videos) => {
      res.json(videos);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('/api/merch', (req, res) => {
  db.any('SELECT* FROM merch')
    .then((merch) => {
      res.json(merch);
    })
    .catch((error) => {
      console.log(error);
    });
});

// updated stripe checkout
app.post('/payment', async (req, res) => {
  const name = req.body.product_name;
  const price = req.body.product_price;
  console.log(name, price);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: name
          },
          unit_amount: price
        },
        quantity: 1
      }
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000'
  });
  res.redirect(303, session.url);
});

//listen
app.listen(process.env.PORT, () => {
  console.log('Server is running..');
});
