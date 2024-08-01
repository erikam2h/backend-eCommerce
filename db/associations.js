import sequelize from "./index.js";
import Product from "../models/Product.js";
import Category from "../models/Category.js";
import Order from "../models/Order.js";
import User from "../models/User.js";
Product.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Product, { foreignKey: 'categoryId' });
Order.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync();

export {Product, Category, User, Order};