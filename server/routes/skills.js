var express = require('express');
var router = express.Router();
var Skill = require('../models/skill');

router.post('/', function(req, res) {
    var skill = new Skill(req.body);
    skill.save(function(err) {
         if(err) {
             res.sendStatus(500);
             return;
         }

         res.sendStatus(201);
    });
});

router.get('/:id', function(req, res) {
  var ids = req.params.id;
  console.log(ids);
  Skill.find({user_id : ids}, function(err, skills) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(skills);
  });
});

module.exports = router;
