module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define("Wallet", {
    type: DataTypes.STRING,
    currency: DataTypes.STRING,
    balance: DataTypes.FLOAT
  });

  Wallet.associate = (models) => {
    Wallet.belongsTo(models.User);
  };

  return Wallet;
};