const models = require('./models');
const CountersController = require('./controllers/counters-controller');

const router = (app) => {
  app.get('/counters/:id', CountersController.show);
  app.patch('/counters/:id', CountersController.update);
};

module.exports = router;
