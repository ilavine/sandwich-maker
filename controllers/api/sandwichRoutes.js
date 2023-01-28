const { Sandwich, Ingredients, SandwichIngredients } = require('../../models');
const router = require('express').Router();

const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  // find all sandwichesSandwich
  try {
    let dbSandwichData = await Sandwich.findAll({
      include: {
        model: Ingredients,
        attributes: ['id', 'name'],
      },
    });

    if (!dbSandwichData) {
      return res.status(404).json({ message: 'Did not find those categories' });
    } else {
      return res.json(dbSandwichData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Did not find those sandwiches :(' });
  }
});

router.get('/:id', withAuth, async (req, res) => {
  // find one sandwich by its `id` value
  // be sure to include its associated Products
  try {
    let dbSandwichData = await Sandwich.findOne({
      where: {
        id: req.params.id,
      },
      // include: {
      //   model: Product,
      //   attributes: ['id', 'name'],
      // },
    });

    if (!dbSandwichData) {
      return res.status(404).json({ message: 'Did not find those categories' });
    } else {
      return res.json(dbSandwichData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Did not find those sandwiches :(' });
  }
});

router.post('/', withAuth, async (req, res) => {
  // create a new sandwich
  try {
    let dbSandwichData = await Sandwich.create({
      user_id: req.session.user_id,
      name: req.body.id,
    });
    await SandwichIngredients.create({
      sandwich_id: dbSandwichData.id,
      ingredient_id: req.body.valueOne,
    });
    await SandwichIngredients.create({
      sandwich_id: dbSandwichData.id,
      ingredient_id: req.body.valueTwo,
    });
    await SandwichIngredients.create({
      sandwich_id: dbSandwichData.id,
      ingredient_id: req.body.valueThree,
    });
    await SandwichIngredients.create({
      sandwich_id: dbSandwichData.id,
      ingredient_id: req.body.valueFour,
    });
    await SandwichIngredients.create({
      sandwich_id: dbSandwichData.id,
      ingredient_id: req.body.valueFive,
    });
    if (!dbSandwichData) {
      return res.status(404).json({ message: 'Did not find those categories' });
    } else {
      return res.json(dbSandwichData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'an error occured' });
  }
});

// update sandwich - withAuth fx
router.put('/:id', withAuth, async (req, res) => {
  // console.log(req.body, req.params.id);
  try {
    let updatedSandwich = await Sandwich.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updatedSandwich) {
      return res.status(404).json({ message: 'Did not find those categories' });
    } else {
      return res.json(updatedSandwich);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'an error occured', err });
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  //console.log(req.body, req.params.id);
  try {
    const delSandwich = await Sandwich.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!delSandwich) {
      return res.status(404).json({ message: 'Could not delete sandwich' });
    } else {
      return res.json(delSandwich);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'an error occured', err });
  }
});

module.exports = router;
