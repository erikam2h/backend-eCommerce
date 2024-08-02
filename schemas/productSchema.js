import Joi from "joi";

const productSchema = Joi.object({
    name: Joi.string().min(2).max(30).required(),
    price: Joi.number().min(1).required(),
    categoryId: Joi.number().integer().required(),
    description: Joi.string().min(2).max(200).required(),
});

export default productSchema;