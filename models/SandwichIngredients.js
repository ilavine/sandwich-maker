const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SandwichIngredients extends Model {}

SandwichIngredients.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    sandwich_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sandwich',
        key: 'id',
      },
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ingredients',
        key: 'id',
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'sandwichingredients',
  }
);

module.exports = SandwichIngredients;
