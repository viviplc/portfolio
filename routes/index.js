var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Viviana Leyva Portfolio' });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'Viviana Leyva Portfolio' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Viviana Leyva Portfolio' });
});

module.exports = router;
