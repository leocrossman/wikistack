const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false,
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
<<<<<<< HEAD
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
=======
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
>>>>>>> 273230cf244b3669beea46c8489e3fa58a784fe4
  },
  status: {
    type: Sequelize.ENUM('open', 'closed'),
  },
});

Page.beforeValidate((instance) => {
    instance.slug =  instance.title.replace(/\s+/g, '_').replace(/\W/g, '');
  })

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
<<<<<<< HEAD
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
=======
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
>>>>>>> 273230cf244b3669beea46c8489e3fa58a784fe4
  },
});

module.exports = {
  db,
  Page,
  User,
};
