import Product from "../models/Product.js";
const calculateTotal = async (products) => {
   
    try {
        let totalPrice = 0;
        //checks if every product in order exists
        for (let item of products) {
            const product = await Product.findByPk(item.productId);
        //if it doesnt exist, throw an error
            if (!product) {
                throw new Error(`Product with id ${item.productId} not found`);
            }
        //calculate total price
            totalPrice += product.price * item.quantity;
        }
        return totalPrice;

    } catch (error) {
        console.error('Error in calculating total:', error);
        throw error;
    }
}

export default calculateTotal;