const { Review } = require('../../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  // find all ingredients
  try {
    await Review.findAll({
      include: {
        model: Product,
        attributes: ['id', 'name'],
      },
    }).then((dbReviewData) => {
      if (!dbReviewData) {
        res.status(404).json({ message: 'Did not find those categories' });
        return;
      }
      res.json(dbReviewData);
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
    await Review.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: Product,
        attributes: ['id', 'name'],
      },
    }).then((dbReviewData) => {
      if (!dbReviewData) {
        res.status(404).json({ message: 'Did not find those reviews' });
        return;
      }
      res.json(dbReviewData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    await Review.create({
      name: req.body.name,
    }).then((dbReviewData) => res.json(dbReviewData));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
