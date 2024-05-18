const Customer = require("./Customer")
const Product = require("./Product")
const ProductCategory = require("./ProductCategory")
const Rol = require("./Rol")
const Sale = require("./Sale")
const User = require("./User")

Rol.belongsToMany(User,{through: 'RolsUsers'})
User.belongsToMany(Rol,{through: 'RolsUsers'})

ProductCategory.hasMany(Product)
Product.belongsTo(ProductCategory)

Customer.hasMany(Sale)
Sale.belongsTo(Customer)

User.hasMany(Sale)
Sale.belongsTo(User)