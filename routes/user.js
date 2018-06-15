const router = require('express').Router();
const userList = require('../views/userList.js');
const userPages = require('../views/userPages.js');

router.get('/', async (req, res) => {
    res.send(userList());
  });

router.get('/:id', async (req, res) => {
    res.send(userPages());
})

router.post('/', async (req, res) => {
    //FIXME: code to create new user
})

router.put('/:id', (req, res) => {
    //FIXME: code to edit existing user
})

router.delete('/:id', (req, res) => {
    //FIXME: code to delete user
})



module.exports = router;
