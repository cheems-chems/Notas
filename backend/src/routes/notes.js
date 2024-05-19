const express = require('express');
const router = express.Router();

const { getNotes, createNote, getNote, updateNote, deleteNode} = require('../controllers/notes.controllers')

router.route('/')
    .get(getNotes)
    .post(createNote);

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNode)

module.exports = router; 