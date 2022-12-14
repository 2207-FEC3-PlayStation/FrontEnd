const controller = require('../controller/controllerIndex.js').QandA;

module.exports = {
  getQuestions: (req, res) => {
    controller.getQuestions(req.query)
      .then((result) => {
        res.status(200).send(result.data)
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },

  getAnswers: (req, res) => {
    controller.getAnswers(req.query)
      .then((result) => {
        res.status(200).send(result.data)
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },

  addQuestion: (req, res) => {
    controller.addQuestion(req.body)
      .then((result) => {
        res.status(201).send(result.data)
      })
      .catch((err) => {
        console.log('err: ', err);
        res.status(400).send(err);
      })
  },

  addAnswer: (req, res) => {
    controller.addAnswer(req.body, req.query)
      .then((result) => {
        res.status(201).send(result.data)
      })
      .catch((err) => {
        console.log('err: ', err);
        res.status(400).send(err);
      })
  },

  helpful: (req, res) => {
    controller.helpful(req.query)
      .then((result) => {
        res.status(204).end()
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },

  report: (req, res) => {
    controller.report(req.query)
      .then((result) => {
        res.status(204).send(result.data)
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
}