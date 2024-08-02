import { Router } from "express";
import validateSchema from "../middleware/validate.js";
import userSchema from "../schemas/userSchema.js";

import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/users.js";

const userRoutes = Router();

// Define routes specific to users
// userRoutes.route("/").get(getUsers).post(createUser);
userRoutes.get("/", getUsers);
userRoutes.post("/", validateSchema(userSchema), createUser);
userRoutes.put("/:id", validateSchema(userSchema), updateUser);
userRoutes.route("/:id").get(getUserById).delete(deleteUser);

export default userRoutes;
