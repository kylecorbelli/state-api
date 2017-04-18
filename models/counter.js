'use strict';
module.exports = function(sequelize, DataTypes) {
  var Counter = sequelize.define('counter', {
    currentValue: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
  }, {
    timestamps: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Counter;
};
