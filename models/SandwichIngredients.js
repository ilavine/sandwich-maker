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
        primaryKey: true,
        autoIncrement: true,
        foreignKey: 'sandwich',
},
ingredients_id: {
    type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        foreignKey: 'ingredients'
}
},
 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'sandwichingredients'
    }

);