const controller = require('../controller/controllerIndex.js').Reviews;

module.exports = {
  getReviews: (req, res) => {
    controller.getReviews(req.query)
      .then((result) => {
        res.status(200).send(result.data)
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },

  getReviewData: (req, res) => {
    controller.getReviewData(req.url)
      .then((result) => {
        res.status(200).send(result.data)
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },

  addReview: (req, res) => {
    controller.addReview(req.data)
      .then((result) => {
        res.status(200).send(result.data)
      })
      .catch((err) => {
        console.log('err: ', err);
        res.status(400).send(err);
      })
  },

  helpful: (req, res) => {
    controller.helpful(req.query.review_id)
      .then((result) => {
        res.status(204).end()
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
  report: (req, res) => {
    controller.report(req.query.review_id)
      .then((result) => {
        res.status(204).end();
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },

}