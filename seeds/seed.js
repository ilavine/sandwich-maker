// const sequelize = require('../config/connection');
// const { User, Ingredients } = require('../models');
// const ingredientData = require('./seedData.json');
// const userData = require('./userData.json');

// const seedData = async () => {
//   await sequelize.sync({ force: true });
//   console.log('Database Synced');
//   await ingredientData();
//   console.log('Ingredients seeded');
//   await userData();
//   console.log('User data synced');
//   process.exit(0);
// };

// const seedData = async () => {
//   await sequelize.sync({ force: true });

//   const ingredients = await Ingredients.bulkCreate(ingredientData, {
//     individualHooks: true,
//     returning: true,
//   });
//   ingredients();
//   process.exit(0);
// };

// seedData();

const sequelize = require('../config/connection');
const { Ingredients } = require('../models');

const ingredientData = require('./seedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Ingredients.bulkCreate(ingredientData, {});

  process.exit(0);
};

seedDatabase();
