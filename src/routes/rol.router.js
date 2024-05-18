const { getAll, create, getOne, remove, update } = require('../controllers/rol.controllers');
const express = require('express');

const rolRouter = express.Router();

rolRouter.route('/')
    .get(getAll)
    .post(create);

rolRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = rolRouter;