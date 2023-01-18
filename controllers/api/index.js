const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const reviewRoutes = require('./reviewRoutes');
const ingredientRoutes = require('./ingredientRoutes');
const sandwichRoutes = require('./sandwichRoutes');

router.use('/users', userRoutes);
router.use('/review', reviewRoutes);
router.use('/ingredient', ingredientRoutes);
router.use('/sandwich', sandwichRoutes);

module.exports = router;
