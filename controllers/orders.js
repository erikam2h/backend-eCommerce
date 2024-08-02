// controllers/order.js
// Import our Order model
import Order from '../models/Order.js';
 
export const getOrder = async (req, res) => {
    try {
      const order = await Order.findAll();
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
 
  export const createOrder = async (req, res) => {
    try {
      const {
        body: { userId,products }
      } = req;
      if (!userId || !products)
        return res.status(400).json({ error: 'userId, products are required' });
      const order = await Order.create(req.body);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
 
  export const getOrderById = async (req, res) => {
    try {
      const {
        params: { id }
      } = req;
      const order = await Order.findByPk(id);
      if (!order) return res.status(404).json({ error: 'Order not found' });
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
 
  export const updateOrder = async (req, res) => {
    try {
      const {
        body: { userId, products },
        params: { id }
      } = req;
      if (!userId || !products)
        return res.status(400).json({ error: 'userId, products are required' });
      const order = await Order.findByPk(id);
      if (!order) return res.status(404).json({ error: 'Order not found' });
      await order.update(req.body);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    };}
 
    export const deleteOrder = async (req, res) => {
        try {
          const {
            params: { id }
          } = req;
          const order = await Order.findByPk(id);
          if (!order) return res.status(404).json({ error: 'Order not found' });
          await order.destroy();
          res.json({ message: 'Order deleted' });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      };