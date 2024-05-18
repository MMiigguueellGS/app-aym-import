const { getAll, create, getOne, remove, update } = require('../controllers/sale.constrollers');
const express = require('express');

const saleRouter = express.Router();

saleRouter.route('/')
    .get(getAll)
    .post(create);

saleRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = saleRouter;