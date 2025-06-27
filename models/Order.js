module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    order_type: DataTypes.STRING,
    currency_pair: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    status: DataTypes.STRING
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User);
    Order.hasOne(models.Transaction, { as: 'BuyTransaction', foreignKey: 'buy_order_id' });
    Order.hasOne(models.Transaction, { as: 'SellTransaction', foreignKey: 'sell_order_id' });
  };

  return Order;
};