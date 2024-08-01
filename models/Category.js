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

/*const schema = Joi.object({
  id: Joi.number()
      .integer()
      ,

  name: Joi.string()
      .min(2)
      .max(255)
      .required(),
});
 
const validateCategory = (category) => {
  return schema.validate(category);
};

//example

const { error } = validateCategory();
if (error) {
  console.log(error.details);
} else {
   Category.create(category)
   .then(() => console.log("Category created successfully"))
   .catch(err => console.error("Error creating category:", err));
}*/
// Category.sync(); // This creates the table if it doesn't exist (and does nothing if it already exists)
//export {validateCategory} ;
export default Category;
