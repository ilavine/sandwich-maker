const { Sandwich } = require('../../models');
const router = require('express').Router();

const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
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
    }

    res.status(404).json({ message: 'Did not find those sandwiches :(' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
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
    }

    res.status(404).json({ message: 'Did not find those sandwiches :(' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new sandwich
  try {
    let dbSandwichData = await Sandwich.create({
      name: req.body.name,
    });

    if (dbSandwichData) {
      res.json(dbSandwichData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update sandwich - withAuth fx
router.put('/:id', withAuth, (req, res) => {
  console.log(req.body, req.params.id);
  Sandwich.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((affectedRows) => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log(req.body, req.params.id);
  Sandwich.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((affectedRows) => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
