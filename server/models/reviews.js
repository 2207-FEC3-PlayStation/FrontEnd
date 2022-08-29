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
    controller.addReview()
      .then((result) => {
        res.status(200).send(result.data)
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },

  helpful: (req, res) => {
    controller.helpful()
      .then((result) => {
        res.status(200).send(result.data)
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
  report: (req, res) => {
    controller.report()
      .then((result) => {
        res.status(200).send(result.data)
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },

}