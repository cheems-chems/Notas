const express = require('express');
const router = express.Router();

const {createUser, getUsers, deleteUser} = require('../controllers/user.controllers')

router.route('/')
.get(getUsers)
.post(createUser);

router.route('/:id')
.delete(deleteUser)

module.exports = router; 