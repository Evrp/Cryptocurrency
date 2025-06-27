const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController.js');

router.post('/', orderController.createOrder);
router.get('/', orderController.listOrders);
router.post('/', (req, res, next) => {
  console.log('POST /orders route called');
  next();
}, orderController.createOrder);


module.exports = router;