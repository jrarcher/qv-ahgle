module.exports = function(app) {
  var express = require('express');
  var companiesRouter = express.Router();

  companiesRouter.get('/', function(req, res) {
    res.send({
      "companies": [{
        "id": 1,
        "parent": null,
        "name": "Alpha Company",
        "type": "Restaraunt",
        "description": "An eatery",
        "created": '2013-02-08T09:30:26',
        "address": 1 ,
        "phone": [ 1 ]
      },
      {
        "id": 2,
        "parent": null,
        "name": "Bravo Company",
        "type": "Retail",
        "description": "A Shop",
        "created": '2013-02-08T09:30:26',
        "address": 2 ,
        "phone": [ 2 ]
      },
      {
        "id": 3,
        "parent": null,
        "name": "Charlie Company",
        "type": "School",
        "description": "A College",
        "created": '2013-02-08T09:30:26',
        "address": 3 ,
        "phone": [ 3, 4 ]
      }],
      "addresses": [{
        "id": 1,
        "street1": "111 Main street",
        "street2": "Suite A",
        "city": "Austin",
        "state": "TX",
        "zip": "78701",
        "country": "US",
        "lat": "foo",
        "lon": "foo",
        "type": "foo",
        "description": "Main"
      },
      {
        "id": 2,
        "street1": "222 Main street",
        "street2": "Suite B",
        "city": "Beaumont",
        "state": "TX",
        "zip": "78702",
        "country": "US",
        "lat": "foo",
        "lon": "foo",
        "type": "foo",
        "description": "Main"
      },
      {
        "id": 3,
        "street1": "333 Main street",
        "street2": "Suite C",
        "city": "Cedar Park",
        "state": "TX",
        "zip": "78703",
        "country": "US",
        "lat": "foo",
        "lon": "foo",
        "type": "foo",
        "description": "Main"
      }],
      "phones": [{
        "id": 1,
        "num": "5121111111",
        "ext": null,
        "type": "Main",
        "country": "US"
      },
      {
        "id": 2,
        "num": "5122222222",
        "ext": "2",
        "type": "Main",
        "country": "US"
      },
      {
        "id": 3,
        "num": "5123333333",
        "ext": "3",
        "type": "Main",
        "country": "US"
      },
      {
        "id": 4,
        "num": "5124444444",
        "ext": "4",
        "type": "Backup",
        "country": "US"
      }]
    });
  });

  companiesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  companiesRouter.get('/:id', function(req, res) {
    res.send({
      'companies': {
        id: req.params.id
      }
    });
  });

  companiesRouter.put('/:id', function(req, res) {
    res.send({
      'companies': {
        id: req.params.id
      }
    });
  });

  companiesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/companies', companiesRouter);
};