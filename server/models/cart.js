const controller = require('../controller/controllerIndex.js').Cart;

module.exports = {
  getCart: (req, res) => {
    controller.getCart()
      .then((result) => {
        res.status(200).send(result.data)
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },

  addToCart: (req, res) => {
    controller.addToCart()
      .then((result) => {
        res.status(200).send(result.data)
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  }
}