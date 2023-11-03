var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/year', (req, res) => {
  const today = new Date();
  console.log(today.getFullYear());
  res.json({ year : today.getFullYear() });
});

module.exports = router;
