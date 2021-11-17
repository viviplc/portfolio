var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Viviana Leyva Portfolio' });
});

router.get('/capstone', function(req, res, next) {
  res.render('projects/capstone', { title: 'Viviana Leyva Capstone project', project_title: 'Capstone' });
});

router.get('/bow', function(req, res, next) {
  res.render('projects/bow', { title: 'Viviana Leyva BOW project', project_title: 'Bank of Waterloo' });
});

router.get('/lopawlty', function(req, res, next) {
  res.render('projects/lopawlty', { title: 'Viviana Leyva lopawlty project', project_title: 'Lopawlty' });
});

router.get('/tuTramite', function(req, res, next) {
  res.render('projects/tuTramite', { title: 'Viviana Leyva tuTramite project', project_title: 'TuTramite' });
});

module.exports = router;
