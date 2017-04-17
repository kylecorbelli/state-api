const models = require('../models');

module.exports = {
  async show(req, res) {
    const counter = await models.Counter.findById(req.params.id)
    res.json({
      currentValue: counter.currentValue
    });
  },

  async update(req, res) {
    try {
      let counter = await models.Counter.findById(req.params.id)
      let newValue;
      switch (req.body.action) {
        case 'increment':
          newValue = counter.currentValue + 1;
          break;
        case 'decrement':
          newValue = counter.currentValue - 1;
          break;
        default:
          return res.status(422).json({ error: 'Expected "action" to be either "increment" or "decrement"' });
          break;
      }
      counter.update({
        currentValue: newValue
      });
      res.json({
        currentValue: counter.currentValue
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};
