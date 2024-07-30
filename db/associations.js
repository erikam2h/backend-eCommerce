import sequelize from "./index.js";
import Product from "../models/Product.js";
import Category from "../models/Category.js";

Product.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Product, { foreignKey: 'categoryId' });

sequelize.sync();

export {Product, Category};