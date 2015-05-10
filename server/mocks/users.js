module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.send({
      'users': [{        
        "id": 1,
        "username": "aaa@gmail.com",
        "pass": null,
        "passAgain": null,
        "gender": "M",
        "birth": '2013-02-08T09:30:26',
        "points": 1,
        "verified": false,
        "created": '2013-02-08T09:30:26',
        "address": 1,
        "name": 1,
        "right": 1
      },
      {        
        "id": 2,
        "username": "bb@gmail.com",
        "pass": null,
        "passAgain": null,
        "gender": "M",
        "birth": '2013-02-08T09:30:26',
        "points": 1,
        "verified": false,
        "created": '2013-02-08T09:30:26',
        "address": 2,
        "name": 2,
        "right": 2
      },
      {        
        "id": 3,
        "username": "ccc@gmail.com",
        "pass": null,
        "passAgain": null,
        "gender": "F",
        "birth": '2013-02-08T09:30:26',
        "points": 1,
        "verified": false,
        "created": '2013-02-08T09:30:26',
        "address": 3,
        "name": 3,
        "right": 3
      }
      ],
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
      "names": [{
        "id": 1,
        "first": "Albert",
        "last": "Anderson",
        "middle": "Aaron",
        "prefix": "Mr.",
        "suffix": "Jr." },
        {
        "id": 2,
        "first": "Billy",
        "last": "Border",
        "middle": "Bragg",
        "prefix": "Mr.",
        "suffix": "III" },
        {
        "id": 3,
        "first": "Charlene",
        "last": "Campbell",
        "middle": "Crissy",
        "prefix": "Mrs.",
        "suffix": null }],
      "rights": [{
        "id": 1,
        "isAdmin": true,
        "canViewUser": true,
        "canEditUser": true,
        "canDeleteUser": true,
        "canViewCompany": true,
        "canEditCompany": true,
        "canDeleteCompany": true,
        "canViewSurvey": true,
        "canEditSurvey": true,
        "canDeleteSurvey": true,
        "canMakeAdmin": true,
        "adminCompanies": []
         },
         {
        "id": 2,
        "isAdmin": true,
        "canViewUser": true,
        "canEditUser": true,
        "canDeleteUser": true,
        "canViewCompany": true,
        "canEditCompany": true,
        "canDeleteCompany": true,
        "canViewSurvey": true,
        "canEditSurvey": true,
        "canDeleteSurvey": true,
        "canMakeAdmin": true,
        "adminCompanies": []
         },
         {
        "id": 3,
        "isAdmin": true,
        "canViewUser": true,
        "canEditUser": true,
        "canDeleteUser": true,
        "canViewCompany": true,
        "canEditCompany": true,
        "canDeleteCompany": true,
        "canViewSurvey": true,
        "canEditSurvey": true,
        "canDeleteSurvey": true,
        "canMakeAdmin": true,
        "adminCompanies": []
         }]
    });
  });

  usersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
