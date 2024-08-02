import  express from "express";
import { getProducts, createProduct, getProductById , updateProduct, deleteProduct } from "../controllers/products.js";
import validateSchema from "../middleware/validate.js";
import productSchema from "../schemas/productSchema.js";

const productsRouter = express.Router();

productsRouter.get('/', getProducts);
productsRouter.post('/',validateSchema(productSchema), createProduct);
productsRouter.get('/:id', getProductById);
productsRouter.put('/:id', validateSchema(productSchema), updateProduct);
productsRouter.delete('/:id', deleteProduct);

export default productsRouter;