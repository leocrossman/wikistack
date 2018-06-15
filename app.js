const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const main = require('./views/main.js');
const models = require('./models/index.js');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
<<<<<<< HEAD

const app = express();
=======
>>>>>>> 273230cf244b3669beea46c8489e3fa58a784fe4

app.use(morgan('dev'));
app.use(express.static(__dirname + '/stylesheets')); // GET /foo.js => ./stylesheets/foo.js // GET /sytle.css => ./stylesheets/sytle.css
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter);

app.get('/', (req, res) => {
  try {
    // res.send(main(''));
    res.redirect('/wiki');
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error}`);
  }
});

const init = async () => {
  // await models.User.sync();
  // await models.Page.sync();
  await models.db.sync();
  // await models.db.sync();
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
