const controller = require('../controller/controllerIndex.js').Products;

module.exports = {

  getProduct: (req, res) => {
    controller.getProduct(req.query.product_id)
        .then((result) => {
          res.status(200).send(result.data)
        })
        .catch((err) => {
          res.status(400).send(err);
        })
  },
  getProducts: (req, res) => {
      controller.getProducts(req.query)
        .then((result) => {
          res.status(200).send(result.data)
        })
        .catch((err) => {
          res.status(400).send(err);
        })
  },
  getStyles: (req, res) => {
    controller.getStyles(Object.values(req.query)[0])
      .then((result) => {
        res.status(200).send(result.data)
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
  getRelated: (req, res) => {
    controller.getRelated(Object.values(req.query)[0])
      .then((result) => {
        res.status(200).send(result.data)
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  }

};