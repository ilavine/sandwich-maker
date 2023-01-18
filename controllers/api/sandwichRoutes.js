const { Sandwich } = require('../../models');
const router = require('express').Router();

const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
  // find all sandwichesSandwich
  try {
    let dbSandwichData = await Sandwich.findAll({
      include: {
        model: Product,
        attributes: ['id', 'name'],
      },
    });

    if (dbSandwichData) {
      res.json(dbSandwichData);
    } else {
      res.status(404).json({ message: 'Did not find those sandwiches :(' });
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
      include: {
        model: Product,
        attributes: ['id', 'name'],
      },
    });

    if (dbSandwichData) {
      res.json(dbSandwichData);
    } else {
      res.status(404).json({ message: 'Did not find those sandwiches :(' });
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
      name: req.body.name,
    });

    if (dbSandwichData) {
      res.json(dbSandwichData);
    } else {
      res.status(404).json({ message: 'an error occured' });
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
    if (updatedSandwich) {
      res.json(updatedSandwich);
    } else {
      res.status(404).json({ msg: 'an error occured', err });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'an error occured', err });
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  //console.log(req.body, req.params.id);
  try {
    let delSandwich = await Sandwich.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (delSandwich) {
      res.json(delSandwich);
    } else {
      res.status(404).json({ msg: 'an error occured', err });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'an error occured', err });
  }
});

module.exports = router;
