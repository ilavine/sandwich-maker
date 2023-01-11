const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
{
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
},
user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    foreign_key: 'sandwich'
},
sandwich_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    foreignKey: 'sandwich'
}
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review'
}
);

module.exports = Review