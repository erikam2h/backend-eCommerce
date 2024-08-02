import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";
import Product from "./Product.js";
import calculateTotal from "../middleware/calculateTotal.js";
const Order = sequelize.define("Order", {
   /* id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },*/
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
        allowNull: true,
    },
});


Order.beforeCreate(async (order) => {
        order.total = await calculateTotal(order.products);
    });

Order.beforeUpdate(async (order) => {
        order.total = await calculateTotal(order.products);
    });
 //Order.sync(); // This creates the table if it doesn't exist (and does nothing if it already exists)

export default Order;
