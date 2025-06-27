module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password_hash: DataTypes.STRING,
      KYC_status: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Wallet);
    User.hasMany(models.Order);
    User.hasMany(models.Transfer, {
      foreignKey: "sender_user_id",
      as: "SentTransfers",
    });
    User.hasMany(models.Transfer, {
      foreignKey: "receiver_user_id",
      as: "ReceivedTransfers",
    });
    User.hasMany(models.FiatTransaction);
  };

  return User;
};
