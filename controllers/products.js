import {Product} from "../db/associations.js";


export const getProducts = async (req, res) => {
    try {

        const { categoryId } =req.query;

      const products = await Product.findAll({
        where: categoryId ? { categoryId } : {}
      });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const createProduct = async (req,res) => {
    try {
        const {
            body: { name, description, price, categoryId }
        } = req;
        const product = await Product.create(req.body);
        res.json(product);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
  };

export const getProductById = async (req,res) => {
    try {
        const {
            params: {id}
        } = req;
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({error: 'Product not found'});
        res.json(product);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
  };

export const updateProduct = async (req,res) => {
    try {
        const {
            body: { name, description, price, catergoryId },
            params: {id}
        } = req;
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({error:'Product not found'});
        await product.update(req.body);
        res.json(product);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
  };

  export const deleteProduct = async (req,res) => {
    try {
        const {
            params: {id}
        } = req;
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({error:'Product not found'});
        await product.destroy();
        res.json({message: 'Product deleted successfully'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};