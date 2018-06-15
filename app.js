const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const main = require('./views/main.js');
const models = require('./models/index.js');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/stylesheets'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  try {
    res.send(main(''));
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error}`);
  }
});

const init = async () => {
  // await models.User.sync();
  // await models.Page.sync();
  await models.db.sync({ force: true });
  // await models.db.sync();
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
