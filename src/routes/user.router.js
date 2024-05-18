const { getAll, create, getOne, remove, update, setUserRoles } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route('/')
    .get(getAll)
    .post(create);

userRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

    userRouter.route('/:id/rols')
    .post(setUserRoles)

module.exports = userRouter;