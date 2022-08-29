const controller = require('../controller/controllerIndex.js');

module.exports = {

  getProducts: (req, res) => {
    //this currently only works using one parameter, like product_id. Might need to adjust if getting multiple products using page/count as parameters
      controller.Products.getProduct(Object.values(req.query)[0])
        .then((result) => {
          res.status(200).send(result.data)
        })
        .catch((err) => {
          res.status(400).send(err);
        })
  },
  getStyles: (req, res) => {
    controller.Products.getStyles(Object.values(req.query)[0])
      .then((result) => {
        res.status(200).send(result.data)
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
  getRelated: (req, res) => {
    controller.Products.getRelated(Object.values(req.query)[0])
      .then((result) => {
        res.status(200).send(result.data)
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  }

};