const { getAll, create, getOne, remove, update } = require('../controllers/productCategory.controllers');
const express = require('express');

const productCategoryRouter = express.Router();

productCategoryRouter.route('/')
    .get(getAll)
    .post(create);

productCategoryRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = productCategoryRouter;