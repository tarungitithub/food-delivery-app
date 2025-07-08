const express = require('express');
const router = express.Router();
const data = require('../data/dummyData');

router.get('/restaurants', (req, res) => {
  res.json(data.restaurants);
});

router.post('/order', (req, res) => {
  const order = req.body;
  console.log("Received Order:", order);
  res.json({ status: "Order received!", orderId: Math.floor(Math.random() * 10000) });
});

module.exports = router;
