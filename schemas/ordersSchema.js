import joi from 'joi';

const ordersSchema = joi.object({
    userId: joi.number().required(),
    total: joi.number(),
    products: joi.array().items(joi.object({
        productId: joi.number().required(),
        quantity: joi.number().required()
    })).required()
    });

export default ordersSchema;