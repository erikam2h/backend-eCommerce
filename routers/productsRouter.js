import  express from "express";
import { getProducts, createProduct, getProductById , updateProduct, deleteProduct } from "../controllers/products.js";

const productsRouter = express.Router();

productsRouter.get('/', getProducts);
productsRouter.post('/', createProduct);
productsRouter.get('/:id', getProductById);
productsRouter.put('/:id', updateProduct);
productsRouter.delete('/:id', deleteProduct);

export default productsRouter;