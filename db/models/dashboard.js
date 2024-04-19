'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dashboard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dashboard.init({
    name: DataTypes.STRING,
    client: DataTypes.STRING,
    scheduled: DataTypes.STRING,
    completed: DataTypes.STRING,
    cancel: DataTypes.STRING,
    selection: DataTypes.STRING,
    onboarding: DataTypes.STRING,
    offer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dashboard',
  });
  return dashboard;
};