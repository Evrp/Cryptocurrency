module.exports = (sequelize, DataTypes) => {
  const FiatTransaction = sequelize.define("FiatTransaction", {
    type: DataTypes.STRING,
    currency: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    status: DataTypes.STRING
  });

  FiatTransaction.associate = (models) => {
    FiatTransaction.belongsTo(models.User);
  };

  return FiatTransaction;
};