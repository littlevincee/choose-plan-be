'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Plans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Features, { through: 'PlanFeatures'})
    }
  };
  Plans.init({
    code: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL(5,2),
    period: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Plans',
  });
  return Plans;
};