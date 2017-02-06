var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/dad', function(req, res, next) {
    res.render('dad');
});
router.get('/mom', function(req, res, next) {
    res.render('mom');
});
router.get('/sister', function(req, res, next) {
    res.render('sister');
});
router.get('/me', function(req, res, next) {
    res.render('me');
});
module.exports = router;
