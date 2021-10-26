const express = require('express');
const router = express.Router();

router.get('https://whispering-tundra-94459.herokuapp.com/about/', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;