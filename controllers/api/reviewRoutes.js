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

router.put('/:id', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: 'Please login first!' });
  }
  // Ensure user updating is original author
  Review.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedReview) => {
      res.json(updatedReview);
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
  Review.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delReview) => {
      res.json(delReview);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'an error occured', err });
    });
});

module.exports = router;
