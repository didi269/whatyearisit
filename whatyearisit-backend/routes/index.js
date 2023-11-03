var express = require('express');
var router = express.Router();

router.get('/year', (req, res) => {
  const today = new Date().getFullYear().toString();
  res.json({ year : today });
});

module.exports = router;
