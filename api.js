const express = require('express');
const router = express.Router();


const restaurants = [];
const orders = [];


router.post('/restaurants', (req, res) => {
  const restaurant = req.body;
  restaurant.id = restaurants.length + 1;
  restaurants.push(restaurant);
  res.json({ message: 'Restaurant added', restaurant });
});


router.get('/restaurants', (req, res) => {
  res.json(restaurants);
});


router.post('/order', (req, res) => {
  const order = req.body;
  order.id = orders.length + 1;
  orders.push(order);
  res.json({ message: 'Order placed', orderId: order.id });
});

module.exports = router;
