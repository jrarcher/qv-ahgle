module.exports = function(app) {
  var express = require('express');
  var surveysRouter = express.Router();

  surveysRouter.get('/', function(req, res) {
    res.send({
      'surveys': []
    });
  });

  surveysRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  surveysRouter.get('/:id', function(req, res) {
    res.send({
      'surveys': {
        id: req.params.id
      }
    });
  });

  surveysRouter.put('/:id', function(req, res) {
    res.send({
      'surveys': {
        id: req.params.id
      }
    });
  });

  surveysRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/surveys', surveysRouter);
};
