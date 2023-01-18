const User = require('./User');
const Ingredients = require('./Ingredients');
const Sandwich = require('./Sandwich');
const Review = require('./Review');
const SandwichIngredients = require('./SandwichIngredients');
const Category = require('./category');

User.hasMany(Sandwich, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Review, {
  foreignKey: 'sandwich_id',
  onDelete: 'CASCADE',
});

Sandwich.belongsTo(User, {
  foreignKey: 'user_id',
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
});

Ingredients.belongsToMany(Sandwich, { through: SandwichIngredients });

Sandwich.belongsToMany(Ingredients, { through: SandwichIngredients });

Category.hasMany(Ingredients, {
  foreignKey: 'category_id',
});

Ingredients.belongsTo(Category, {
  foreignKey: 'category_id',
});

module.exports = {
  User,
  Ingredients,
  Sandwich,
  Review,
  SandwichIngredients,
  Category,
};
