import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const Order = sequelize.define("Order", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    products: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: false,
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

// Order.sync(); // This creates the table if it doesn't exist (and does nothing if it already exists)

export default Order;
