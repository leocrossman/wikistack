const router = require('express').Router();
const main = require('../views/main.js');

const { addPage } = require('../views');

router.get('/', async (req, res, next) => {
  res.send(main());
});

router.post('/', async (req, res, next) => {
  res.json(req.body);
  res.send('Got to POST /wiki/');
});

router.get('/add', async (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
