const controller = require('../controller/controllerIndex.js');

module.exports = {

  getProduct: (req, res) => {
    controller.Products.getProduct(req._parsedUrl.pathname, Object.values(req.query)[0])
      .then((result) => {
      res.status(200).send(result.data)
      })
      .catch((err) => {
      console.log('This is the error: ', err);
      res.status(400).send(err);
      })
  },
  getStyles: '',
  getRelated: ''

};