const { Ingredients } = require('../../models');
const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  // find all ingredients
  try {
    let dbIngredientData = await Ingredients.findAll({
      include: {
        model: Product,
        attributes: ['id', 'name'],
      },
    });

    if (dbIngredientData) {
      res.json(dbIngredientData);
    }

    res.status(404).json({ message: 'Did not find those categories' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Did not find those categories' });
  }
});

router.get('/:id', withAuth, async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    let dbIngredientData = await Ingredients.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: Product,
        attributes: ['id', 'name'],
      },
    });

    if (dbIngredientData) {
      res.json(dbIngredientData);
    } else {
      res.status(404).json({ message: 'Did not find those items' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Did not find those items' });
  }
});

router.post('/', withAuth, async (req, res) => {
  // create a new category
  try {
    let dbIngredientData = await Ingredients.create({
      name: req.body.name,
    });

    if (dbIngredientData) {
      res.json(dbIngredientData);
    } else {
      res.status(404).json({ message: 'Did not add ingredient' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Did not add ingredient' });
  }
});

router.put('/:id', withAuth, async (req, res) => {
  //update category
  try {
    let updatedIngredients = await Ingredients.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updatedIngredients) {
      res.json(updatedIngredients);
    } else {
      res.status(404).json({ message: 'an error occured' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'an error occured', err });
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    let delIngredients = await Ingredients.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (delIngredients) {
      res.json(delIngredients);
    } else {
      res.status(404).json({ message: 'an error occured' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'an error occured', err });
  }
});

module.exports = router;
