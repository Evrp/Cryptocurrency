module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("Transaction", {
    amount: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    fee: DataTypes.FLOAT
  });

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.Order, { as: 'BuyOrder', foreignKey: 'buy_order_id' });
    Transaction.belongsTo(models.Order, { as: 'SellOrder', foreignKey: 'sell_order_id' });
  };

  return Transaction;
};