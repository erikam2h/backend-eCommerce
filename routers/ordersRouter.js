import  express from "express";
import { getOrder, createOrder, getOrderById , updateOrder, deleteOrder } from "../controllers/orders.js";
import validateSchema from "../middleware/validate.js";
import ordersSchema from "../schemas/ordersSchema.js";
const ordersRouter = express.Router();

ordersRouter.get('/', getOrder);
ordersRouter.post('/',validateSchema(ordersSchema), createOrder);
ordersRouter.get('/:id', getOrderById);
ordersRouter.put('/:id',validateSchema(ordersSchema), updateOrder);
ordersRouter.delete('/:id', deleteOrder);

export default ordersRouter;