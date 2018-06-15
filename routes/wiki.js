const router = require('express').Router();
const main = require('../views/main.js');
const { Page } = require('../models');
const { addPage } = require('../views');
const { wikiPage } = require('../views');

router.get('/', async (req, res, next) => {
  const postArray = await Page.findAll();
  res.send(main(postArray));
});

router.post('/', async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content_text;
  const page = new Page({
    title: title,
    content: content,
    status: 'open',
  });

  try{
    await page.save();
    res.redirect(`/wiki/${page.slug}`);
  }
  catch (error) {
    next(error);
  }
});

router.get('/add', (req, res) => {
  res.send(addPage());
});

router.get('/:slug', async (req, res) => {
  try{
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    });
    res.send(wikiPage(page));
  }
  catch(error){
    next(error);
  }
});

module.exports = router;
