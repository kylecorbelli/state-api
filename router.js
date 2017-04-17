const models = require('./models');
const CountersController = require('./controllers/counters-controller');

const router = (app) => {
  app.get('/counter/:id', CountersController.show);
  app.patch('/counter/:id', CountersController.update);
};

module.exports = router;
