import  express from "express";
import { getOrder, createOrder, getOrderById , updateOrder, deleteOrder } from "../controllers/orders.js";

const ordersRouter = express.Router();

ordersRouter.get('/', getOrder);
ordersRouter.post('/', createOrder);
ordersRouter.get('/:id', getOrderById);
ordersRouter.put('/:id', updateOrder);
ordersRouter.delete('/:id', deleteOrder);

export default ordersRouter;