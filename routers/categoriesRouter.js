import  express from "express";
import { getCategory, createCategory, getCategoryById , updateCategory, deleteCategory } from "../controllers/categories.js";
import categoriesSchema from "../schemas/categoriesSchema.js";
import validateSchema from "../middleware/validate.js";
const categoriesRouter = express.Router();

categoriesRouter.get('/', getCategory);
categoriesRouter.post('/',validateSchema(categoriesSchema), createCategory);
categoriesRouter.get('/:id', getCategoryById);
categoriesRouter.put('/:id',validateSchema(categoriesSchema), updateCategory);
categoriesRouter.delete('/:id', deleteCategory);




export default categoriesRouter;