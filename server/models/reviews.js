const controller = require('../controller/controllerIndex.js');

module.exports = {
  getReviews: (req, res) => {
    controller.Reviews.getReviews(req.url)
    .then((result) => {
      res.status(200).send(result.data)
    })
    .catch((err) => {
      console.log('This is the error: ');
      res.status(400).send(err);
    })
  }
}