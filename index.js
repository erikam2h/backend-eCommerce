import express from "express";
import cors from "cors";
import productsRouter from "./routers/productsRouter.js";
import userRoutes from "./routers/userRoutes.js";
import {
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
  getCategoryById,
} from "./controllers/categories.js";
import {
  deleteOrder,
  updateOrder,
  createOrder,
  getOrderById,
  getOrder,
} from "./controllers/orders.js";

const PORT = process.env.PORT ?? 3000;
const app = express();

// app.use(cors());

app.use(express.json());

// User
app.use("/users", userRoutes);

// Products
app.use("/products", productsRouter);

//category
app.route("/categories").get(getCategory).post(createCategory);
app
  .route("/categories/:id")
  .get(getCategoryById)
  .put(updateCategory)
  .delete(deleteCategory);

//order
app.route("/orders").get(getOrder).post(createOrder);
app.route("/orders/:id").get(getOrderById).put(updateOrder).delete(deleteOrder);

app.get("/", (req, res) => {
  console.log("Hello World from home page");
  res.send("Hello World from home page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
