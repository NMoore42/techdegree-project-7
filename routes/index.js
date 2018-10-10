const express = require('express');
const router = express.Router();
const data = require('../data/data.json').projects;

router.get('/', (req, res) => {
  res.locals.projects = data;
  res.render('index');
});


module.exports = router;
