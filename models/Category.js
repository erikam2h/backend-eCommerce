import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";
import Joi from "joi";
const Category = sequelize.define("Category", {
 /* id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  }, */
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});


// Category.sync(); // This creates the table if it doesn't exist (and does nothing if it already exists)

export default Category;
