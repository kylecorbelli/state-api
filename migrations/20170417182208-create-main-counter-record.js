'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('counters', [{
      currentValue: 0
    }]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('counters', null, {});
  }
};
