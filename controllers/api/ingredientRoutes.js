const { Ingredients } = require('../../models');
const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  // find all ingredients
  try {
    let dbIngredientData = await Ingredients.findAll({
      // include: {
      //   model: Ingredients,
      //   attributes: ['id', 'name', 'category_id'],
      // },
    });
    console.log(dbIngredientData);
    if (!dbIngredientData) {
      return res.status(404).json({ message: 'Did not find those categories' });
    } else {
      return res.json(dbIngredientData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Did not find those ingredients' });
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
      // include: {
      //   model: Ingredients,
      //   attributes: ['id', 'name', 'category_name'],
      // },
    });

    if (!dbIngredientData) {
      return res.status(404).json({ message: 'Did not find those categories' });
    } else {
      return res.json(dbIngredientData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Did not find those items' });
  }
});

router.post('/', withAuth, async (req, res) => {
  // create a new ingredient
  try {
    let dbIngredientData = await Ingredients.create({
      name: req.body.name,
      category_id: req.body.category_id,
    });
    console.log(req.body);
    if (!dbIngredientData) {
      return res
        .status(404)
        .json({ message: 'Did not find those ingredients' });
    } else {
      return res.json(dbIngredientData);
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
    if (!updatedIngredients) {
      return res.status(404).json({ message: 'Did not find those categories' });
    } else {
      return res.json(updatedIngredients);
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
    if (!delIngredients) {
      return res.status(404).json({ message: 'Did not find those categories' });
    } else {
      return res.json(delIngredients);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'an error occured', err });
  }
});

module.exports = router;
