const router = require('express').Router();
const { order } = require('../../models');
const withAuth = require('../../utils/auth');

// Create new order
router.order('/', withAuth, async (req, res) => {
  try {
    const orderData = await order.create({
      name: req.body.name,
      category: req.body.category,
      order_date: req.body.order_date,
      description: req.body.description,
      user_id: req.session.user_id
    });

    res.status(200).json(orderData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update existing order
router.put('/:id', withAuth, async (req, res) => {
  try {
    const orderData = await order.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.userId
      }
    });


    if (!orderData) {
      res.status(404).json({ message: 'No order found with that ID' });

      return;
    }

    res.status(200).json(orderData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete existing order
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const orderData = await order.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.userId
      }
    });


    if (!orderData) {
      res.status(404).json({ message: 'No order found with that ID' });

      return;
    }

    res.status(200).json(orderData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;