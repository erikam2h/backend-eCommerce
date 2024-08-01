import express from "express";
import cors from "cors";
import productsRouter from "./routers/productsRouter.js";
import userRoutes from "./routers/userRoutes.js";
import categoriesRouter from "./routers/categoriesRouter.js";
import ordersRouter from "./routers/ordersRouter.js";
import errorHandler from "./middleware/errorHandler.js";

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(cors());
app.use(express.json());

// User
app.use("/users", userRoutes);

// Products
app.use("/products", productsRouter);

//category
app.use("/categories", categoriesRouter);
//order
app.use("/orders", ordersRouter);

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello World from home page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
