const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sandwich extends Model {}

Sandwich.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNulll: false,
    },
    sandwich_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'sandwich',
  }
);

module.exports = Sandwich;
