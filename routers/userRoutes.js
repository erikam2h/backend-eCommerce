import { Router } from "express";

import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/users.js";

const userRoutes = Router();

// Define routes specific to users
userRoutes.route("/").get(getUsers).post(createUser);
userRoutes.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

export default userRoutes;
