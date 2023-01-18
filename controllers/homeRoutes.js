const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const sandiwichHelper = require('../utils/sandwichHelper');

router.get('/', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/dashboard');
    } else {
    // show the carousel if user is not logged in
      const sandwichCarousel = await sandiwichHelper;

      res.render('homepage', {
        sandwichCarousel,
        logged_in: req.session.logged_in
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// TODO: show the dashboard when user is logged in
router.get('/dashboard', withAuth, async (req, res) => {
   try {
    //TODO: show the dashboard when user is logged in

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

module.exports = router;
