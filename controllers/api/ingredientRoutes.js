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

router.put('/:id', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: 'Please login first!' });
  }
  // Ensure user updating is original author
  Ingredients.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedIngredients) => {
      res.json(updatedIngredients);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'an error occured', err });
    });
});

router.delete('/:id', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: 'Please login first!' });
  }
  // Ensure user deleting is original author
  Ingredients.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delIngredients) => {
      res.json(delIngredients);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'an error occured', err });
    });
});

module.exports = router;
