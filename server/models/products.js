const controller = require('../controller/controllerIndex.js');

module.exports = {

  getProducts: (req, res) => {
    //this currently only works using one parameter, like product_id. Might need to adjust if getting multiple products using page/count as parameters
      controller.Products.getProduct(Object.values(req.query)[0])
        .then((result) => {
          res.status(200).send(result.data)
        })
        .catch((err) => {
          console.log('This is the error: ', err);
          res.status(400).send(err);
        })
  },
  getStyles: (req, res) => {
    console.log('query ', req.query);
    controller.Products.getStyles(Object.values(req.query)[0])
      .then((result) => {
        res.status(200).send(result.data)
      })
      .catch((err) => {
        // console.log('This is the error: ', err);
        res.status(400).send(err);
      })
  },
  getRelated: ''

};