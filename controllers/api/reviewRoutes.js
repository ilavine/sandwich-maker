const { Review, User, Sandwich } = require('../../models');
const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  // find all ingredients
  try {
    let dbReviewData = await Review.findAll({
      // include: {
      //   model: Product,
      //   attributes: ['id', 'name'],
      // },
    });
    if (!dbReviewData) {
      return res.status(404).json({ message: 'Did not find those categories' });
    } else {
      return res.json(dbReviewData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Did not find those categories' });
  }
});

router.get('/:id', withAuth, async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    let dbReviewData = await Review.findOne({
      where: {
        id: req.params.id,
      },
      // include: {
      //   model: Product,
      //   attributes: ['id', 'name'],
      // },
    });
    if (!dbReviewData) {
      return res.status(404).json({ message: 'Did not find those categories' });
    } else {
      return res.json(dbReviewData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Did not find those reviews' });
  }
});

router.post('/', async (req, res) => {
  // create a new review
  console.log(req.body, 'req');
  try {
    let dbReviewData = await Review.create({
      user_id: req.body.user_id,
      sandwich_id: req.body.sandwich_id,
      review_id: req.body.review_id,
      review_text: req.body.text,
      include: [User, Sandwich, Review],
    });
    if (!dbReviewData) {
      return res.status(404).json({ message: 'Could not add those reviews' });
    } else {
      return res.json(dbReviewData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'an error occured', err });
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    let updatedReview = await Review.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updatedReview) {
      res.json(updatedReview);
    } else {
      res.status(404).json({ msg: 'an error occured', err });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'an error occured', err });
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    let delReview = await Review.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (delReview) {
      res.json(delReview);
    } else {
      res.status(404).json({ msg: 'an error occured', err });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'an error occured', err });
  }
});

module.exports = router;
