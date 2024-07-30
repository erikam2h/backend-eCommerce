import express from "express";
import cors from "cors";
import { createCategory, deleteCategory, getCategory, updateCategory, getCategoryById } from "./controllers/categories.js";
import { deleteOrder, updateOrder, createOrder, getOrderById, getOrder } from "./controllers/orders";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(cors());

app.get("/", (req, res) => {
  console.log("Hello World from home page");
  res.send("Hello World from home page");
});

//category
app.route('/categories').get(getCategory).post(createCategory);
app.route('/categories/:id').get(getCategoryById).put(updateCategory).delete(deleteCategory);

//order
app.route('/orders').get(getOrder).post(createOrder);
app.route('/orders/:id').get(getOrderById).put(updateOrder).delete(deleteOrder);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
