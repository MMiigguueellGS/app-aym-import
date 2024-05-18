const { getAll, create, getOne, remove, update } = require('../controllers/customer.controlleres');
const express = require('express');

const customerRouter = express.Router();

customerRouter.route('/')
    .get(getAll)
    .post(create);

customerRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = customerRouter;