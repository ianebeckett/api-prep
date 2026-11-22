var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('GET request to problems page');
});

router.get('/:problem_name/question', function(req, res, next) {
  res.send('GET request to problem question');
});

router.get('/:problem_name/editorial', function(req, res, next) {
  res.send('GET request to problem editorial');
});

router.get('/:problem_name/submissions', function(req, res, next) {
  res.send('GET request to problem submissions');
});

router.get('/:problem_name/discussion', function(req, res, next) {
  res.send('GET request to problem discussion');
});

module.exports = router;

