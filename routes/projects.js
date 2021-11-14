var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Home projects' });
});

router.get('/capstone', function(req, res, next) {
  res.render('projects/capstone', { title: 'Capstone project' });
});

module.exports = router;
