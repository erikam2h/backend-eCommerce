import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// User.sync(); // This creates the table if it doesn't exist (and does nothing if it already exists)

export default User;
