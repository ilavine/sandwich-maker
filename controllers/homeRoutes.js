const router = require('express').Router();
const { Sandwich, Ingredients, Category } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/dashboard');
    } else {
      // show the carousel if user is not logged in
      const sandwichCarousel = await sandiwichHelper;

      res.render('homepage', {
        sandwichCarousel,
        logged_in: req.session.logged_in,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//show the dashboard when user is logged in
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    //show the dashboard when user is logged in
    if (req.session.logged_in) {
      const dbSandwichData =
        (await Sandwich.findAll({
          include: {
            model: Ingredients,
            attributes: ['id', 'name'],
          },
        })) || [];
      const sandwiches = dbSandwichData.map((sandwiches) =>
        sandwiches.get({ plain: true })
      );

      res.render('dashboard', {
        logged_in: req.session.logged_in,
        data: sandwiches,
      });
      // res.json(dbSandwichData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.render('signup');
    return;
  }
  res.redirect('/dashboard');
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.redirect('/');
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get('/sandwich', withAuth, async (req, res) => {
  // if((req.session.logged_in))
  const categoryData = await Category.findAll({
    include: {
      model: Ingredients,
    },
  });
  const categories = categoryData.map((category) =>
    category.get({ plain: true })
  );
  res.render('sandwich', { categories, logged_in: req.session.logged_in });
});

module.exports = router;
