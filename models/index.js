const User = require("./User");
const Ingredients = require("./Ingredients");
const Sandwich = require("./Sandwich");
const Review = require("./Review");
const SandwichIngredients = require("./SandwichIngredients");

User.hasMany(Sandwich, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Review, {
  foreignKey: "sandwich_id",
  onDelete: "CASCADE",
});

Sandwich.belongsTo(User, {
  foreignKey: "user_id",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
});
