const { Sandwich } = require('../../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  // find all sandwichesSandwich
  try {
    await Sandwich.findAll({
      include: {
        model: Product,
        attributes: ['id', 'name'],
      },
    }).then((dbSandwichData) => {
      if (!dbSandwichData) {
        res.status(404).json({ message: 'Did not find those sandwiches :(' });
        return;
      }
      res.json(dbSandwichData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one sandwich by its `id` value
  // be sure to include its associated Products
  try {
    await Sandwich.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: Product,
        attributes: ['id', 'name'],
      },
    }).then((dbSandwichData) => {
      if (!dbSandwichData) {
        res.status(404).json({ message: 'Did not find that sandwich' });
        return;
      }
      res.json(dbSandwichData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new sandwich
  try {
    await Sandwich.create({
      name: req.body.name,
    }).then((dbSandwichData) => res.json(dbSandwichData));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
