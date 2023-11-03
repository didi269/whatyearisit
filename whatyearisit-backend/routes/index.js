var express = require('express');
var router = express.Router();

router.get('/year', (req, res) => {
  const today = new Date();
  console.log(today.getFullYear());
  res.json({ year : today.getFullYear() });
});

module.exports = router;
