const sequelize = require('../config/connection');
const { Ingredients, Category, User, Sandwich } = require('../models');
const categoryData = require('./categories.json');
const ingredientData = require('./ingredientData.json');
// const seedReview = require('./reviewSeed.json');
const userData = require('./userData.json');
const sandwichData = require('./sandwichData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Category.bulkCreate(categoryData, {});
  await Ingredients.bulkCreate(ingredientData, {});
  await User.bulkCreate(userData, {});
  // await Review.bulkCreate(seedReview, {});
  await Sandwich.bulkCreate(sandwichData, {});

  process.exit(0);
};

seedDatabase();
