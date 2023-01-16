const { Review } = require('../models');

const dbReviewData = [
  {
    review_text: 'this is amazing',
    user_id: 1,
    post_id: 1,
  },
  {
    review_text: 'this sandwich is terrible',
    user_id: 2,
    post_id: 2,
  },
  {
    review_text: 'I would like to make this',
    user_id: 3,
    post_id: 3,
  },
];

const seedReview = () => Review.bulkCreate(dbReviewData);

module.exports = seedReview;
