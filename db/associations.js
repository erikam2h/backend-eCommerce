import sequelize from "./index.js";
import Product from "../models/Product.js";
import Category from "../models/Category.js";
import Order from "../models/Order.js";
import User from "../models/User.js";
Product.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Product, { foreignKey: 'categoryId' });
Order.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Order, { foreignKey: 'userId' });
Product.belongsToMany(Order, {  through: 'OrderProduct',});
Order.belongsToMany(Product, {  through: 'OrderProduct',});
sequelize.sync();

export {Product, Category, User, Order};