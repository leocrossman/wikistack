const router = require('express').Router();
const { addPage } = require('../views');

router.get('/', async (req, res, next) => {
  res.send('Got to GET /wiki/');
});

router.post('/', async (req, res, next) => {
  res.send('Got to POST /wiki/');
});

router.get('/add', async (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
