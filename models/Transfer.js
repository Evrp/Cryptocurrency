module.exports = (sequelize, DataTypes) => {
  const Transfer = sequelize.define("Transfer", {
    to_external_address: DataTypes.STRING,
    currency: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    status: DataTypes.STRING
  });

  Transfer.associate = (models) => {
    Transfer.belongsTo(models.User, { as: 'Sender', foreignKey: 'sender_user_id' });
    Transfer.belongsTo(models.User, { as: 'Receiver', foreignKey: 'receiver_user_id' });
  };

  return Transfer;
};