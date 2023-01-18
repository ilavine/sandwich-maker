const sequelize = require('../config/connection');
const { Ingredients, Category } = require('../models');
const categoryData = require('./categories.json');
const ingredientData = require('./ingredientData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });


  await Category.bulkCreate(categoryData, {});
  await Ingredients.bulkCreate(ingredientData, {});


  process.exit(0);
};

seedDatabase();
