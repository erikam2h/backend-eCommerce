import  express from "express";
import { getCategory, createCategory, getCategoryById , updateCategory, deleteCategory } from "../controllers/categories.js";

const categoriesRouter = express.Router();

categoriesRouter.get('/', getCategory);
categoriesRouter.post('/', createCategory);
categoriesRouter.get('/:id', getCategoryById);
categoriesRouter.put('/:id', updateCategory);
categoriesRouter.delete('/:id', deleteCategory);

export default categoriesRouter;