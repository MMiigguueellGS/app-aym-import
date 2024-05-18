const express = require('express');
const userRouter = require('./user.router');
const rolRouter = require('./rol.router');
const productRouter = require('./product..router');
const productCategoryRouter = require('./productCategory.router');
const saleRouter = require('./sale.router');
const customerRouter = require('./customer.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/users",userRouter)
router.use("/rols",rolRouter)
router.use("/products",productRouter)
router.use("/productCategories",productCategoryRouter)
router.use("/sales",saleRouter)
router.use("/customers",customerRouter)

module.exports = router;