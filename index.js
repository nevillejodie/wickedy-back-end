const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const path = require('path');
var http = require('http');
require('dotenv').config()
const KEY = process.env.KEY 


async function main() {
    try {
      const stripe = require('stripe')(`${KEY}`);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000,
        currency: 'gbp',
        payment_method_types: ['card'],
        receipt_email: 'jenny.rosen@example.com',
      });
      console.log('Worked! ', paymentIntent);
    } catch (err) {
      console.log('Error! ', err.message);
    }
  }
  
  main();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
    res.send('Got a POST request')
  })

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})




