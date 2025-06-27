const { Order, User } = require("../models");

exports.createOrder = async (req, res) => {
  const { user_id, order_type, currency_pair, amount, price } = req.body;
  try {
    const order = await Order.create({
      userId: user_id,
      order_type,
      currency_pair,
      amount,
      price,
      status: "OPEN",
    });
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.listOrders = async (req, res) => {
  const orders = await Order.findAll({ include: [User] });
  res.json(orders);
};
