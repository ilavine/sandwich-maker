const { Ingredients } = require('../../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  // find all ingredients
  try {
    await Ingredients.findAll({
      include: {
        model: Product,
        attributes: ['id', 'name'],
      },
    }).then((dbIngredientData) => {
      if (!dbIngredientData) {
        res.status(404).json({ message: 'Did not find those categories' });
        return;
      }
      res.json(dbIngredientData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    await Ingredients.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: Product,
        attributes: ['id', 'name'],
      },
    }).then((dbIngredientData) => {
      if (!dbIngredientData) {
        res.status(404).json({ message: 'Did not find those items' });
        return;
      }
      res.json(dbIngredientData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    await Ingredients.create({
      name: req.body.name,
    }).then((dbIngredientData) => res.json(dbIngredientData));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
